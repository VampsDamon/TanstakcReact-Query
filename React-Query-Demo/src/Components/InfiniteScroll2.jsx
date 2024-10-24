import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { User } from "./PagginatedRQ";
import { useInView } from "react-intersection-observer";

const fetchUser = ({ pageParam }) => {
  return axios.get(
    `http://localhost:3000/users/?_page=${pageParam}&_per_page=25`
  );
};

const InfiniteScroll2 = () => {
  const { data, isLoading, isError, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["infiniteScroll1"],
    queryFn: fetchUser,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      if (allPages.length < 40) return allPages.length + 1;
      else return undefined;
    },
  });

  const {ref,inView,entry}=useInView();
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [ref, inView]);
  if (isLoading) return <div>Loading.....</div>;
  if (isError) return <div>{error.message}</div>;
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap justify-between gap-10 p-4">
        {data.pages.map(({ data }) => {
          return data.data.map(
            ({ id, first_name, last_name, email, gender, color }) => (
              <User
                key={id}
                firstName={first_name}
                lastName={last_name}
                email={email}
                gender={gender}
                color={color}
              />
            )
          );
        })}
      </div>
     <div ref={ref}>{!inView?"Loading....":""}</div>
    </div>
  );
};

export default InfiniteScroll2;
