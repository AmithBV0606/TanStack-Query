import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchUsers } from "../API/api";

export default function InfiniteScroll() {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    // To check we have more pages or not
    getNextPageParam: (lastPage, allPages) => {
      //   console.log("Last Page : ", lastPage);
      //   console.log("All Pages : ", allPages);
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1;

    if (bottom && hasNextPage) {
      fetchNextPage(); // This method again calls "fetchUsers"
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  if (status === "loading")
    return <div className="text-center h-screen">Page is loading......</div>;
  if (status === "error")
    return <div className="text-center h-screen">Error fetching data....</div>;

  return (
    <div className="space-y-6">
      <p className="text-center underline text-3xl">
        Infinite Scroll in TanStack Query
      </p>

      <div className="mx-20">
        {data?.pages?.map((page, index) => (
          <ul key={index}>
            {page.map((user) => (
              <li
                key={user.id}
                className="p-[10px] border border-white rounded-2xl mt-3"
              >
                <p>{user.login}</p>

                <img
                  src={user.avatar_url}
                  alt={user.login}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
      {isFetchingNextPage && <div className="text-center">Loading more ....</div>}
    </div>
  );
}
