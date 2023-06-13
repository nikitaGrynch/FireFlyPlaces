import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Example from "./components/Navbar";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import PlaceDescription from "./components/PlaceDescription";

function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<HomePage />} />
          <Route path="place/:id" element={<PlaceDescription />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
