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
import TextTemplate from './TextTemplate';


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
        className="mySwiper py-4 md:py-5 max-h-[70vh] md:h-screen my-12 pt-10 md:pt-0"
      >
        <SwiperSlide >
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 md:px-4 px-1 relative'>
                <TextTemplate heading="Your Path to Digital Excellence"/>
            <Lottie animationData={oneAnimation} loop={true}  style={{height:"80vh"}}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 md:px-4 px-1 relative'>
                <TextTemplate heading="Your Trusted Marketing Partner" />
                
            <Lottie animationData={twoAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 md:px-4 px-1 relative'>
            <TextTemplate heading="Premier Web Development Here" />
                
            <Lottie animationData={fourAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 md:px-4 px-1 relative'>
            <TextTemplate heading="Drive Innovative Digital Strategies" />
                
            <Lottie animationData={threeAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 md:px-4 px-1 relative'>
            <TextTemplate heading="Tailored Web Dev Services"/>
                
            <Lottie animationData={sixAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 md:px-4 px-1 relative'>
            <TextTemplate heading="Ignite Your Digital Presence" />
                
            <Lottie animationData={fiveAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 md:px-4 px-1 relative'>
            <TextTemplate heading="Cutting-Edge Digital Marketing"/>
                
            <Lottie animationData={sevenAnimation} loop={true}  style={{height:"80vh"}} />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Caurosel;