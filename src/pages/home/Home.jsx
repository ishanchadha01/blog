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

      <br></br>
      <br></br>

      <div className="updates">
        <h2>Updates</h2>
        <ul>
          <li>Starting my Master's in Computer Science with a Specialization in 
          Robotics and Perception in January 2023</li>
          <br></br>
          <li>Currently a summer intern at Capital One working on data processing and 
          analysis for the travel card</li>
          <br></br>
          <li>Accepted offer as Robotics intern at Relativity Space for 
          Fall 2022</li>
        </ul>
      </div>

      <br></br>
      <br></br>

      <div className="posts col-sm-3">
        <Posts />
      </div>
    </div>
  );
}