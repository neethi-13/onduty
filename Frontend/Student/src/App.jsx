import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Stdpage from "./Stdpage";
import Staffpage from "./Staffpage";
import Hodpage from "./Hodpage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<Stdpage />} />
        <Route path="/staff" element={<Staffpage />} />
        <Route path="/hod" element={<Hodpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
