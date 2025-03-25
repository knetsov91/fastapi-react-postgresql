import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Layout = ({children}) => {

    return (
        <>
        <Navbar />
        <div>
           <Outlet />
        </div>
        </>
    );
}
export default Layout