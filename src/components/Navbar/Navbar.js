import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div></div>
      <div className="navbar_title"><a href="/">SW</a></div>
      <div className="navbar_spacer" />
      <div className="navbar_navigation-search" >
        <ul>
          <form className="nav_search_bar" onSubmit={props.getWeather}>
          <li><input type="text" name="city" placeholder="Enter city here..."/></li>
          <li><button>Q</button></li>
        </form>
        </ul>
      </div>
      <div className="navbar_spacer" />
      <div className="navbar_navigation-items" >
        <ul>
          <li><a href="/">login</a></li>
          <li><a href="/">signup</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;