import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Person from "./pages/Person";
import People from "./pages/People";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}></Route>

          <Route path="people" element={<People />}>
            <Route path=":justAParam" element={<Person />}></Route>
          </Route>

          <Route path="contactUs/*" element={<ContactUs />}></Route>

          <Route path="aboutUs" element={<AboutUs />}></Route>
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
