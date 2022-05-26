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
      <ul>
        {
          posts.map((post) => 
            <Post id={post.id} title={post.title} category={post.category} time={post.time} content={post.content} />
          )
        }
      </ul>
      <Post title="How does Google Maps plan so fast and so well?" img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" description="Something" />
    </div>
  );
}