// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Lottie from 'lottie-react';
import oneAnimation from "./../../public/one.json"
import twoAnimation from "./../../public/two.json"
import threeAnimation from "./../../public/three.json"
import fourAnimation from "./../../public/web_one.json"
import fiveAnimation from "./../../public/web_two.json"
import sixAnimation from "./../../public/web_three.json"
import sevenAnimation from "./../../public/web_four.json"


const Caurosel = () => {
    return (
        <>
      <Swiper
        autoplay={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper py-4 md:py-5 max-h-[80vh] md:h-screen -pt-10 md:pt-0"
      >
        <SwiperSlide >
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 relative'>
                <h2 className='text-2xl md:text-5xl font-semibold md:font-bold md:w-5/12 md:leading-[60px] leading-8 capitalize absolute md:relative top-2 md:px-0 px-2 md:text-left text-center'>Expert Digital Marketing & Web Development Solutions</h2>
            <Lottie animationData={oneAnimation} loop={true}  style={{height:"80vh"}}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 relative'>
                <h2 className='text-2xl md:text-5xl font-semibold md:font-bold md:w-5/12 md:leading-[60px] leading-8 capitalize absolute md:relative top-2 md:px-0 px-2 md:text-left text-center'>Your Trusted Marketing & Development Partner</h2>
            <Lottie animationData={twoAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 relative'>
                <h2 className='text-2xl md:text-5xl font-semibold md:font-bold md:w-5/12 md:leading-[60px] leading-8 capitalize absolute md:relative top-2 md:px-0 px-2 md:text-left text-center'>Your Premier Web Development Partner</h2>
            <Lottie animationData={fourAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 relative'>
                <h2 className='text-2xl md:text-5xl font-semibold md:font-bold md:w-5/12 md:leading-[60px] leading-8 capitalize absolute md:relative top-2 md:px-0 px-2 md:text-left text-center'>Drive Growth with Innovative Digital Strategies</h2>
            <Lottie animationData={threeAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 relative'>
                <h2 className='text-2xl md:text-5xl font-semibold md:font-bold md:w-5/12 md:leading-[60px] leading-8 capitalize absolute md:relative top-2 md:px-0 px-2 md:text-left text-center'>Tailored Digital Marketing & Web Development Services</h2>
            <Lottie animationData={sixAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 relative'>
                <h2 className='text-2xl md:text-5xl font-semibold md:font-bold md:w-5/12 md:leading-[60px] leading-8 capitalize absolute md:relative top-2 md:px-0 px-2 md:text-left text-center'>Tailored Digital Marketing & Web Development Services</h2>
            <Lottie animationData={fiveAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 relative'>
                <h2 className='text-2xl md:text-5xl font-semibold md:font-bold md:w-5/12 md:leading-[60px] leading-8 capitalize absolute md:relative top-2 md:px-0 px-2 md:text-left text-center'>Tailored Digital Marketing & Web Development Services</h2>
            <Lottie animationData={sevenAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Caurosel;