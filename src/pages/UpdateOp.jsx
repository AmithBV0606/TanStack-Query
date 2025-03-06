import React from "react";
import { fetchPosts, updatePost } from "../API/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

export default function UpdateOp() {
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
  });

  //   Update Mutations :
  const updateMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (data, id) => {
      //   console.log(data.data);
      queryClient.setQueryData(["posts"], (allPosts) => {
        return allPosts.map((post) =>
          post?.id === id ? { ...post, title: data.data.title } : post
        );
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
                className="relative bottom-0 mt-6 bg-green-700 py-2 px-4 rounded-lg cursor-pointer"
                onClick={() => updateMutation.mutate(id)}
              >
                Update
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
