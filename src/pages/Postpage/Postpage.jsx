import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { doc, getDoc, collection, query, onSnapshot } from "firebase/firestore";
import db from "../../firebase-config";
import "./postpage.css";

export default function Postpage(props) {   
  const location = useLocation();
  console.log(location);

  const [postData, setPostData] = useState(null);
  const {postId} = useParams();
  useEffect(() => {
    if (postId) {
      const ref = doc(db, "posts", postId.slice(1));
      getDoc(ref).then(snap => {
        const data = snap.data();
        if (data.id) {
          setPostData(data);
        }
        return data;
      })
      .catch(err => {
        console.log('No post found', err);
      });
    }
  }, [postId]);

  if (postData) {
    console.log(postData);
    return (
      <>
        <div className="title">{postData.title}</div>
        <div className="postbody">
          {Object.entries(postData.content.order).map(([key, val]) => {
            if (val.includes("image")) {
              return <img key={postData.content.val} src={"../../assets/" + postData.content[val]}></img>;
            } else if (val.includes("text")) {
              return <p key={postData.content.val}>{postData.content[val]}</p>
            }
          })}
        </div>
      </>
    );
  }
  return (
    <div>Loading...</div>
  );
  
}