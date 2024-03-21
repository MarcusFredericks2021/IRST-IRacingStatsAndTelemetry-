import React from "react";
import "./App.css";
import SideBar from "./components/SideBar.jsx";
import Landing from "./pages/landing.jsx";
import Statistics from "./pages/Statistics.jsx";
import Telemetry from "./pages/Telemetry.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path={"/"} exact element={<Landing />} />
          <Route path={"/Statistics"} exact element={<Statistics />} />
          <Route path={"/Telemetry"} exact element={<Telemetry />} />
        </Routes>
      </BrowserRouter>
    </div>

    // <div>
    //   <SideBar />
    //   <Landing />
    // </div>
  );
}

//refresh function?
// use browser router eventually when there are more pages
//for now return jsx page as a component
export default App;
