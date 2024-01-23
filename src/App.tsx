import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/liked" Component={Liked} />
    </Routes>
  );
}

export default App;
