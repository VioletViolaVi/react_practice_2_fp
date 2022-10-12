import React from "react";
import { Link, Outlet } from "react-router-dom";

function People() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to={"actors"}>Actors</Link>
      <br />
      <Link to={"dancers"}>Dancers</Link>
      <br />
      {/* the <Person/> component is being displayed in <Outlet /> below. otherwise, nothing is shown */}
      <Outlet />
    </>
  );
}

export default People;
