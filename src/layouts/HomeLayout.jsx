import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

const HomeLayout = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;