import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "red"
  };

  return (
    <>
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to={"people"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        People
      </NavLink>

      <NavLink
        to={"contactUs"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Contact Us
      </NavLink>

      <NavLink
        to={"aboutUs"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        About Us
      </NavLink>

      <br />
      <Outlet />
    </>
  );
}

export default Header;
