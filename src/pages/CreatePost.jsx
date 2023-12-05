import React, { useState,useEffect } from 'react'
import { addDoc,collection } from 'firebase/firestore';
import { db,auth } from '../Firebase-config';
import { useNavigate } from 'react-router-dom';
export default function CreatePost({isAuth}) {
  let navigate = useNavigate();
  const [title,setTitle] = useState("");
  const [postText,setPostText] = useState("");
  const postsCollectionRef = collection(db,"posts")
  const createPost = async()=>{
    await addDoc(postsCollectionRef,
      {title,title,postText,postText, 
        author:{name:auth.currentUser.displayName,id: auth.currentUser.uid}})
        navigate("/")
  }
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='createPostPage'>
    <div className='cpContainer'>
      <h1>Create A Post </h1>
      <div className='inputGp'>
      <label htmlFor="">Title</label>
      <input type="text" place="Title..." onChange={(e)=>{setTitle(e.target.value)}}/>
      </div>
      <div className='inputGp'>
      <label htmlFor="">Post</label>
      <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{setPostText(e.target.value)}}></textarea>
      </div>
      <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}
