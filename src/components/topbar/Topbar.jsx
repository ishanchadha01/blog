import React from 'react'
import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
    return (
      <div className="top">
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
  );
}