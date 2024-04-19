import { Link } from "react-router-dom";
import Lottie from "lottie-react";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import errorLottie from "./../public/error.json"

const Error = () => {
  return (
    <div className="relative">
        <div className="h-3/5">
        <Lottie animationData={errorLottie} loop={true} style={{height:"100vh"}} />
        </div>
      <Link to="/">
        <button className="btn btn-primary absolute bottom-8 left-[50%]">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
