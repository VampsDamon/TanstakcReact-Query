import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'

const fetchUser=(page)=>{
   return axios.get(`http://localhost:3000/users/?_page=${page}&_per_page=25`)
}

const PagginatedRQ = () => {
    const [page, setPage] = useState(1);
    const {data,isError,isLoading,error}=useQuery({
        queryKey:["users",page],
        queryFn:()=>fetchUser(page),
        placeholderData:keepPreviousData
    })
 if(isLoading) return <div>Loading.....</div>
 if(isError) return <div>{error.message}</div>;
 const {pages}=data.data;
  return (
    <div>
      <Users page={page} setPage={setPage} users={data.data.data}/>
      
    </div>
  )
}

export default PagginatedRQ

const Users=({users,page,setPage})=>{
    console.log(users)
   return (
     <div>
       <div className="flex flex-wrap justify-center gap-6 p-4">
         {users.map(({ id, first_name, last_name, email, gender, color }) => (
           <User
             key={id}
             firstName={first_name}
             lastName={last_name}
             email={email}
             gender={gender}
             color={color}
           />
         ))}
       </div>
       <div className="buttons flex justify-center gap-10 m-4 uppercase text-white">
         <button
           className="bg-gray-950 px-8 uppercase py-2 rounded-md cursor-pointer"
           onClick={() => setPage((prev) => prev - 1)
           }
           disabled={page==1?true:false}
         >
            {page-1==1?"First ": page-1} Page
         </button>
         <p className='bg-gray-800 w-10 h-10 px-4 py-1 text-center rounded-full'>{page}</p>
         <button
           className="bg-gray-950 px-8 uppercase py-2 rounded-md cursor-pointer"
           onClick={() => setPage((prev) => prev + 1)}
           disabled={page===40?true:false}
         >
           Next
         </button>
       </div>
     </div>
   );
}

const User = ({ firstName, lastName, email, gender, color }) => {
    console.log(typeof color)
  return (
    <>
      <div className="p-4 bg-slate-500 text-white w-[200px] h-[250px] rounded-md flex flex-col justify-center items-center">
        <div
          className={`profile  w-[100px] h-[100px] rounded-full `}
          style={{ backgroundColor: color }}
        ></div>
        <div className="details p-2 text-center">
          <h1 className="uppercase font-bold">
            {firstName} {lastName}
          </h1>
          <p className="overflow-hidden truncate">{email}</p>
          <p>{gender}</p>
        </div>
      </div>
    </>
  );
};