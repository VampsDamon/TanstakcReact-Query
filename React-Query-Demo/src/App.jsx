import { useState } from 'react'
import Home from './Components/Home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import TraditionalsPosts from './Components/TraditionalsPosts';
import PostsRQ from './Components/PostsRQ';
import RQPostDetails from './Components/RQPostDetails';
import PagginatedRQ from './Components/PagginatedRQ';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/posts' element={<TraditionalsPosts/>}/>
          <Route exact path='/rq-posts' element={<PostsRQ/>}/>
          <Route exact path='/rq-post/:postId' element={<RQPostDetails/>}/>
          <Route exact path="/users"  element={<PagginatedRQ/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
