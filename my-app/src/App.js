import "./App.css";
import SideBar from "./components/SideBar.jsx";
import Landing from "./pages/landing.jsx";
//import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <SideBar />
      <Landing />
    </div>
  );
}

// use browser router eventually when there are more pages
//for now return jsx page as a component
export default App;
