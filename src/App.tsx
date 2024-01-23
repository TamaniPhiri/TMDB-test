import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Layout from "./components/global/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/liked" Component={Liked} />
      </Routes>
    </Layout>
  );
}

export default App;
