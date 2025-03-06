import React, { useState } from "react";
import { fetchThreePosts } from "../API/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

export default function Pagination() {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], // useState
    queryFn: () => fetchThreePosts(pageNumber), //useEffect
    placeholderData: keepPreviousData,
  });

  const handleIncrement = () => {
    setPageNumber((prev) => prev + 3);
  };

  const handleDecrement = () => {
      setPageNumber((prev) => prev - 3);
  };

  if (isLoading)
    return <div className="text-center h-screen">Page is loading......</div>;
  if (isError)
    return (
      <div className="text-center h-screen">
        Error : {error.message || "Error has occurred....."}
      </div>
    );

  return (
    <div className="h-screen">
      <div className="text-center">
        <button
          className="bg-pink-600 disabled:bg-pink-900 text-white py-2 px-4 rounded-lg mr-4 cursor-pointer"
          onClick={handleDecrement}
          disabled={pageNumber === 0 ? true : false}
        >
          Prev
        </button>

        <span className="text-2xl">{(pageNumber / 3) + 1}</span>
        
        <button
          className="bg-pink-600 text-white py-2 px-4 rounded-lg ml-4 cursor-pointer"
          onClick={handleIncrement}
        >
          Next
        </button>
      </div>

      <div className="flex justify-center items-center">
        <ul className="">
          {data?.map((post) => {
            const { id, title, body } = post;

            return (
              <li
                key={id}
                className="my-6 p-6 max-w-[900px] border-l-2 border-pink-500 rounded-xl bg-gray-700 text-start"
              >
                <NavLink to={`/rq/${id}`} className={"space-y-6"}>
                  <p className="text-xl font-bold">{id}</p>
                  <p className="text-2xl font-bold">{title}</p>
                  <p className="text-sm font-thin">{body}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}