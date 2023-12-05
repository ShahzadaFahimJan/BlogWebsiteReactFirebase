import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../Firebase-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    // Refresh the posts after deletion
    getPosts();
  };

  const getPosts = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className="homePage">
      {postLists.map((post) => {
        console.log(post.author && post.author.name)
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
             <div className="deletePost">
             
             {isAuth && auth.currentUser && post.author && auth.currentUser.uid === post.author.id && (
              <button onClick={()=>{deletePost(post.id)}}> &#128465;</button>
             )}
              </div>
             
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author && post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
