import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./Dashboard";
import scriptRunner from "./scriptRunner";
import User from "./User";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        {/* <Route path="/admin" element={<Dashboard />} /> */}
        <Route path="/scriptRunner" element={<scriptRunner />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);