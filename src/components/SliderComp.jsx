import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; 

import Image_1 from "../assets/images/1.png";
import Image_2 from "../assets/images/2.png";
import Image_3 from "../assets/images/3.png";

const IMAGES = [
    Image_1,
    Image_2,
    Image_3
];

const SliderComp = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Include modules directly in the Swiper component
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} // Auto-play with a 2-second delay
            spaceBetween={30}
            loop
        >
            {IMAGES.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                    <img src={imageUrl} alt={`Image ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default SliderComp;