import "./header.css";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Magazine</span>
        <span className="headerTitleSm">Website</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1662567693394-179905c34f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
      />
    </div>
  );
}
