import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HomeLayout = () => {
    return (
        <div className="md:flex">
            <div className="md:w-64">
            <Sidebar></Sidebar>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;