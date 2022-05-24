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
          <li className="topListItem">
            <Link className="link" to="/">
              BROWSE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
        </ul>
    </div>
  );
}