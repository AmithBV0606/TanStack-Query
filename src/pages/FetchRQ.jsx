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
      return [];
    }
  };

  const { data } = useQuery({
    queryKey: ["posts"], // useState
    queryFn: getPostsData, //useEffect
  });

  return (
    <div className="">
      <ul className="mx-96">
        {data?.map((post) => {
          const { id, title, body } = post;

          return (
            <li
              key={id}
              className="space-y-6 my-4 p-6 border-l-2 border-white rounded-xl bg-gray-700 text-start"
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