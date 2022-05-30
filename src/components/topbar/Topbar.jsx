import React from 'react'
import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {
    return (
      <div className="top">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              <p>HOME</p>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/portfolio">
              <p>PORTFOLIO</p>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/browse">
              <p>BROWSE</p>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              <p>CONTACT</p>
            </Link>
          </li>
        </ul>
    </div>
  );
}