import React from "react";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

export default function FetchRQ() {
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      return res.status === 200 ? res.data : [];
    } catch (error) {
      console.log("Error is : ", error);
      // return [];
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], // useState
    queryFn: getPostsData, //useEffect
    // gcTime: 5000,
    // staleTime: 5000,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true
  });

  // Conditional rendering based on loading and error state.
  if (isLoading)
    return <div className="text-center">Page is loading......</div>;
  if (isError) return <div className="text-center">Error : {error.message || "Error has occurred....."}</div>;

  return (
    <div className="">
      <ul className="px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data?.map((post) => {
          const { id, title, body } = post;

          return (
            <li
              key={id}
              className="space-y-6 my-6 p-6 max-w-[500px] border-l-2 border-white rounded-xl bg-gray-700 text-start"
            >
              <p className="text-xl font-bold">{title}</p>
              <p className="text-sm font-light">{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
