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
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/browse">
              BROWSE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
    </div>
  );
}