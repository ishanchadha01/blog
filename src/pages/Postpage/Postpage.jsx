import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";
import { doc, getDoc, collection, query, onSnapshot } from "firebase/firestore";
import db from "../../firebase-config";

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
    return (
      <>
        <div className="title">{postData.title}</div>
        <div>
          {Object.entries(postData.content).map(([field, value]) => {
            if (field == "image") {
              return <img key={value} src={"../../assets" + value}></img>;
            } else if (field == "text") {
              return <p key={value}>{value}</p>
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