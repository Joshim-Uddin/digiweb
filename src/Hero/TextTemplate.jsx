
const TextTemplate = (props) => {
    return (
        <div className="md:w-3/6 md:leading-[60px] leading-8 capitalize flex flex-col md:items-start md:justify-start items-center justify-center md:gap-4 gap-2">
            <button className='inline-block px-4 bg-gradient-to-r from-[#860354] to-[#1d0511] shadow-md uppercase rounded-full font-semibold text-white'>Welcome to DigiWeb</button>
            <h1 className="text-3xl md:text-7xl font-semibold md:font-bold md:text-left text-center">{props.heading}</h1>
            <p className="text-lg md:text-xl text-center md:text-left">All your digital solutions for business growth including marketing and business website development perfectly provided here.</p>
            <button className='btn uppercase px-5 bg-gradient-to-r from-[#B47CFD] to-[#FF9F94] text-white text-base md:text-lg rounded-2xl hover:transition-transform hover:duration-100'>Contact Us</button>
            
        </div>
    );
};

export default TextTemplate;