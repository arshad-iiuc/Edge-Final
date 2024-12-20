
import NavBar from './NavBar'
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div className="mx-auto max-w-6xl">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
};

export default Root;