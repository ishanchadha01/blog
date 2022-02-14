import React from 'react'
import { Link } from "react-router-dom";

export default function Topbar() {
    return (
        <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">POSTS</li>
          <li className="topListItem">CV</li>
          <li className="topListItem">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}