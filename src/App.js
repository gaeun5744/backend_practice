import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// eslint-disable-next-line
import Settings from "./pages/settings/Settings";
// eslint-disable-next-line
import Single from "./pages/single/Single";
// eslint-disable-next-line
import Write from "./pages/write/Write";

import React from "react";
// eslint-disable-next-line
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
