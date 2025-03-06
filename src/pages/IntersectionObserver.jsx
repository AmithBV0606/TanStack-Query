import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { fetchUsers } from "../API/api";

export default function IntersectionObserver() {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, inView]);

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

      <div ref={ref} className="text-center text-2xl">
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Scroll down to load more"
          : "No more users"}
      </div>
    </div>
  );
}