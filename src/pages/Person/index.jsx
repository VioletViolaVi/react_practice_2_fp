import React from "react";
import { useParams } from "react-router-dom";

function Person() {
  
  const personName = useParams();
  console.log("personName ==>", personName);

  const { justAParam } = useParams();
  console.log("justAParam ==>", justAParam);

  return (
    <>
      <h1>The person's name is 🥁🥁🥁{personName.justAParam}!</h1>
      <hr />
      <h1>The person's name is 🥁🥁🥁{justAParam}!</h1>
    </>
  );
}

export default Person;
