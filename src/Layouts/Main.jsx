import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Main = () => {
    const {night} = useContext(AuthContext)
    return (
       <div className={night?"bg-gradient-to-r from-[#25131e] to-[#1d0511] text-white":"bg-gradient-to-r from-[#ffffff] to-[#817a92] text-[#860354]"}>
       <Navbar />
       <Outlet />
       <Footer />
       </div>
    );
};

export default Main;