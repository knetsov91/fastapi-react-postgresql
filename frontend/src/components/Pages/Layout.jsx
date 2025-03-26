import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Layout = ({children}) => {

    return (
        <>
        <Navbar />
        <div className="layout">
           <Outlet />
        </div>
        </>
    );
}
export default Layout