import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import axios from "axios";

const RQPostDetails = () => {
  const { postId } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => axios.get(`http://localhost:3000/posts/${postId}`),
  });
  if (isLoading) return <div>page is Loading....</div>;
  if (isError) return <div>{error.message}</div>;
  const { id, title, body } = data.data;
  return (
    <div>
      <Post title={title} id={id} body={body} />
    </div>
  );
};

export default RQPostDetails;
