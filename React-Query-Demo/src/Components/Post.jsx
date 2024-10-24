import React from 'react'

const Post = ({title,id,body}) => {
  return (
    <div className='p-4  bg-gray-600 m-4 rounded-md shadow-md text-white '>
      <h2 className='font-bold text-xl'>
        {id} {title}{" "}
      </h2>
      <p className='px-6'>{body}</p>
    </div>
  );
}

export default Post