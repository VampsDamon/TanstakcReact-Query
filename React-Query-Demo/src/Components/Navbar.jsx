import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex uppercase gap-6 justify-end px-6 py-4  bg-gray-600 font-bold  text-white  list-none">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/posts"}>TradPost</Link>
      </li>
      <li>
        <Link to={"/rq-posts"}>RQPosts</Link>
      </li>
      <li>
        <Link to={"/users"}>Pagination</Link>
      </li>
      <li>
        <Link to={"/users-infinite"}>Infinite-1</Link>
      </li>
      <li>
        <Link to={"/users-infinite2"}>Infinite-2</Link>
      </li>
    </div>
  );
}

export default Navbar