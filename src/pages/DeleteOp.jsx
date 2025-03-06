import React from "react";
import { deletePost, fetchPosts } from "../API/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";

export default function DeleteOp() {
  const queryClient = useQueryClient();

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log("Error is : ", error);
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
    placeholderData: keepPreviousData,
  });

  //   Delete Mutations :
  const deleteMutation = useMutation({
    mutationFn: (id) => deletePost(id),
    //   The mutation function alone isn't enough to delete the data from the UI, we also need to delete the data from the local cache.
    onSuccess: (data, id) => {
    //   console.log(data, id);
    queryClient.setQueryData(["posts"], (currElem) => {
        // console.log(currElem); // Array of all 100 id's data
        return currElem?.filter((post) => post.id !== id)
    });
    },
  });

  if (isLoading)
    return <div className="text-center">Page is loading......</div>;
  if (isError)
    return (
      <div className="text-center">
        Error : {error.message || "Error has occurred....."}
      </div>
    );

  return (
    <div className="flex justify-center items-center">
      <ul className="">
        {data?.map((post) => {
          const { id, title, body } = post;

          return (
            <li
              key={id}
              className="space-y-6 my-6 p-6 max-w-[900px] border-l-2 border-pink-500 rounded-xl bg-gray-700 text-start"
            >
              <NavLink to={`/rq/${id}`}>
                <p className="text-xl font-bold">{id}</p>
                <p className="text-2xl font-bold">{title}</p>
                <p className="text-sm font-thin">{body}</p>
              </NavLink>

              <button
                className="relative bottom-0 mt-6 bg-red-600 py-2 px-4 rounded-lg cursor-pointer"
                onClick={() => deleteMutation.mutate(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
