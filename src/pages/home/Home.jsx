import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="home">
        <Posts />
      </div>
    </>
  );
}