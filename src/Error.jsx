import { Link } from "react-router-dom";
import error from "../src/assets/error.png"
const Error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center error">
        <div className="flex items-center">
        <div className="flex flex-col items-center gap-4 mb-6 md:gap-8">
            <h3 className="text-4xl font-semibold md:text-6xl md:font-bold">Sorry !!!</h3>
            <div className="flex">
            <h2 className="text-5xl md:text-8xl flex items-center gap-2 md:gap-3 font-bold">4 <div className="w-12 h-12 md:w-16 md:h-16 border-[10px] border-dashed border-red-500 animate-spin duration-200 rounded-full"></div> 4</h2>
            <img src={error} alt="" className="w-64 md:w-96"/>
            </div>
            <h3 className="text-4xl font-semibold md:text-6xl md:font-bold">Page Not Found</h3>
        </div>
        
        </div>
      <Link to="/">
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
