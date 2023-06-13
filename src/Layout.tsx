import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout() {
    return (
      <div className=" flex flex-row mt-24 ">
        <Navbar />
        <Outlet />
      </div>
    );
  }
  
  export default Layout;