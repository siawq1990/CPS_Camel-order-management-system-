import React from "react";
import { Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import StationA from "./components/StationA/StationA";
import StationB from "./components/StationB/StationB";
import Request from "./components/Request/Request";
import Pending from "./components/Pending/Pending";


import "./style.css";

const App = () => {
  return (
    <div className="flex-container">
      <SideBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stationA" element={<StationA />} />
        <Route path="/stationB" element={<StationB/>} />
        <Route path="/request" element={<Request />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </div>
  );
};

export default App;
