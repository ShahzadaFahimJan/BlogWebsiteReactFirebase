import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'
import './app.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,Link, BrowserRouter as Router,Routes,
} from "react-router-dom";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
    
//     <Route index element={<Home />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/createpost" element={<CreatePost />} />
//   </Route>
    
      
     
//   )
// );
function App() {

  return (
    <>
     <Router>
     <nav>
      <Link to="/" >Home</Link>
      <Link to="/createpost" >createpost</Link>
      <Link to="/login" >login</Link>
     </nav>
     <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/createpost' element={<CreatePost />} />
      </Routes>
     </Router>
     
     {/* <RouterProvider router={router} /> */}

      
    </>
  )
}

export default App
