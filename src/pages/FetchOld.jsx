import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

export default function FetchOld() {
  // States for posts data, loading and error.
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Fetch posts data function :
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      setIsError(true);
      console.error("The error is : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  // Conditional rendering based on loading and error state.
  if (isLoading)
    return <div className="text-center">Page is loading......</div>;
  if (isError) return <div className="text-center">Error has occurred....</div>;

  return (
    <div className="h-auto">
      <ul className="mx-80">
        {posts?.map((post) => {
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
