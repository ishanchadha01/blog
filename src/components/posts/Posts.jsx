import Post from "../post/Post";
import "./posts.css";
import db from "../../firebase-config";
import React, {useEffect, useState} from "react";
import {collection, query, onSnapshot} from "firebase/firestore";


export default function Posts(props) {
  const ref = query(collection(db, "posts"));
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(ref, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, [posts]);

  if (posts.isLoading) {
    return (
      <div className="loading">
        Loading...
      </div>
    )
  }

  return (
    <div className="posts">
      <h1>Posts</h1>
      <div className="items">
        {
          posts.map((post) => 
            <Post key={post.id} img={"./assets/" + post.coverimg} id={post.id} title={post.title} category={post.category} time={post.time} content={post.content} />
          )
        }
      </div>
    </div>
  );
}