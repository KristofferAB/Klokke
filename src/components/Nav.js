import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link className="nav-style" to="/">
          <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link className="nav-style" to="/klokke">
            <li>Clock</li>
          </Link>
          <Link className="nav-style" to="/about">
            <li>How it works</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
