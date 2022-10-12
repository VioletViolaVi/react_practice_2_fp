import React from "react";
import { Route, Routes } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <h1>Contact Us Page</h1>

      <Routes>
        <Route index element={<p>gotten here via relative route</p>} />
        <Route path=":contactId" element={<p>gotten here via param in url</p>} />
      </Routes>
    </>
  );
}

export default ContactUs;
