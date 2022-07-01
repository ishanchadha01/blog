import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import "./home.css";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="home">
      <div className="intro">
        <img className="col-sm-2" src="/assets/profile.png"></img>
        <div className="aboutme col-sm-2">
          <h1>Ishan Chadha</h1>
          <p className="">
            I'm currently a Master's student at Georgia Tech with a specialization in 
            Robotics and Perception. I am also an aspiring robotics engineer!
            <br></br>
            <br></br>
            I am interested in how machines can be made intelligent and how they sense 
            and interact with the world around them. I've conducted research, completed projects, 
            and have industry experience in the realms of computer vision, natural language processing, 
            path/motion planning, and more. 
          </p>
        </div>
      </div>
      <div className="posts col-sm-3">
        <Posts />
      </div>
    </div>
  );
}