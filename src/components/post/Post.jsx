import { Link } from "react-router-dom";
import "./post.css";

export default function Post({title, img, description}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={"/post/"+title} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {description}
      </p>
    </div>
  );
}
