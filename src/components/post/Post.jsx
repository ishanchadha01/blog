import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import "./post.css";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Post(props) {
  const [time, setTime] = useState("");
  useEffect(() => {
    if (props.time) {
      const t = new Timestamp(props.time.seconds, props.time.nanoseconds);
      const date = t.toDate();
      setTime(months[date.getMonth()] + " " + date.getDate().toString() + ", " + date.getFullYear().toString());
    }
  }, [props.time]);

  return (
    <div className="post">
      <img
        className="postImg"
        src={props.img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={"/browse/"+ props.category + "/" + props.id} className="link">
            {props.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{time}</span>
      </div>
      <p className="postDesc">
        {props.description}
      </p>
    </div>
  );
}
