import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import logo from "../assets/logo.png"
import logodark from "../assets/logodark.png"


const Logo = () => {
    const {night} = useContext(AuthContext)
    return (
            <img src={night?logo:logodark} alt="" className="md:max-h-24 md:h-24 h-12" />
    );
};

export default Logo;