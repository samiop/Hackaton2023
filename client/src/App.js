import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import User from "./User";

// import "./bezkoder.css";
//import "./bezkoder.css";



  // dispatch(allProjects());
  function App() {
  return (
 <BrowserRouter>
      <Routes>

      <Route path="/" element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path={"/user"} element={<User />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}; //          <Route path={"/addchapter"} element={<Addchapter />} />
export default App;
