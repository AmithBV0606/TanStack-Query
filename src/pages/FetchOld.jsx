import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

export default function FetchOld() {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log("Error is : ", error);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="">
      <ul className="mx-32">
        {posts?.map((post) => {
          return (
            <li key={post.id} className="space-y-6 my-4 p-6 border-l-2 border-white rounded-xl bg-gray-700 text-start">
              <p className="text-xl font-bold">{post.title}</p>
              <p className="text-sm font-light">{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
