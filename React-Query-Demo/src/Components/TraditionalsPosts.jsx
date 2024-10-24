import React, { useEffect, useState } from 'react'
import axios from "axios"
import Post from './Post';
const TraditionalsPosts = () => {

   const [allPosts, setAllPosts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [isError, setIsError] = useState(false);

   const fetchPosts=async()=>{
     try {
         const response=await axios.get("http://localhost:3000/posts");
        setAllPosts(response.data);
     } catch (error) {
        setIsError(true);
     }finally{
       setIsLoading(false);
     }
   }
   useEffect(()=>{
    fetchPosts();
   },[])
   
   if(isLoading)
    return <div>page is Loading....</div>
   if(isError) return <div>Error has occurred...</div>

  return (
    <div>
      <h1 className='p-2 text-center uppercase font-extrabold text-2xl'>Traditional Posts</h1>
      {allPosts.map(({ id, title, body }) =>  <Post key={id} title={title} id={id} body={body} />
      )
      }
    </div>
  );
}

export default TraditionalsPosts