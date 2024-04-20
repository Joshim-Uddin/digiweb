
import art from "../../src/assets/ornament.png"

const Services = () => {
    return (
        <>
        <div className="relative py-2 md:py-4">
            <img src={art} alt="" className="md:h-48 md:w-[480px] h-24 w-48 mx-auto" />
            <h2 className="absolute md:top-20 top-8 left-0 right-0 text-2xl md:text-6xl text-center md:font-bold font-semibold uppercase"> 
                Our Services
            </h2>            
        </div>
        <div>
            This is our services
        </div>
        </>
    );
};

export default Services;