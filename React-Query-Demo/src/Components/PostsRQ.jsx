import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'
import Post from './Post';
import { Link } from 'react-router-dom';

const PostsRQ = () => {
  const {data,isError,isLoading,error}=useQuery({
    queryKey:["posts"],
    queryFn:()=>axios.get("http://localhost:3000/posts")
  })  
 if (isLoading) return <div>page is Loading....</div>;
 if (isError) return <div>{error.message}</div>;

 return (
   <div>
     <h1 className="p-2 text-center uppercase font-extrabold text-2xl">
       RQ - Posts
     </h1>
     {data.data.map(({ id, title, body }) => (
       <Link to={`/rq-post/${id}`}>
         <Post key={id} title={title} id={id} body={body} />
       </Link>
     ))}
   </div>
 );
}

export default PostsRQ