import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchIndividualPost } from "../API/api";
import { NavLink, useParams } from "react-router-dom";

export default function FetchIndividual() {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id], // Whenever the value mentioned within the square brackets changes, the "fetchIndividualPost" will be called.
    queryFn: () => fetchIndividualPost(id),
  });

  if (isPending) return <p>Loading....</p>;
  if (isError)
    return <p>Error : {error.message || "Something went wrong!!"}</p>;

  return (
    <div className="w-full h-screen px-96 space-y-6">
      <p className="text-4xl text-center underline">Post Id : {id}</p>

      <div className="bg-gray-700 border-l-2 border-pink-500 p-10 rounded-2xl space-y-6">
        <p className="text-2xl">{data.id}</p>
        <p className="text-xl">{data.title}</p>
        <p className="text-sm">{data.body}</p>
      </div>

      <NavLink to={`/rq`}>
        <button className="bg-purple-700 px-4 py-3 rounded-2xl cursor-pointer">Go Back</button>
      </NavLink>
    </div>
  );
}