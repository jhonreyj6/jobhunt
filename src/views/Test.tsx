import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "../assets/css/swiper.css";
// import required modules
import { Pagination, Mousewheel } from "swiper/modules";
import { useRef, useState } from "react";

const Test = () => {
    return (
        <>
            <div>
                <Swiper
                    className="mySwiper swiper-h"
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    <SwiperSlide>Horizontal Slide 1</SwiperSlide>
                    <SwiperSlide>
                        <Swiper
                            className="mySwiper2 swiper-v"
                            direction={"vertical"}
                            spaceBetween={50}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                        >
                            <SwiperSlide>Vertical Slide 1</SwiperSlide>
                            <SwiperSlide>Vertical Slide 2</SwiperSlide>
                            <SwiperSlide>Vertical Slide 3</SwiperSlide>
                            <SwiperSlide>Vertical Slide 4</SwiperSlide>
                            <SwiperSlide>Vertical Slide 5</SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
                    <SwiperSlide>Horizontal Slide 3</SwiperSlide>
                    <SwiperSlide>Horizontal Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Test;
