import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from "swiper/core";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import './index.css'
import getStaticPath from "../../service/getStaticPath"

SwiperCore.use([Navigation]);

function SwiperSection(props) {
    const {images} = props;

    return (
        <Swiper
            spaceBetween={150}
            slidesPerView={2.5}
            loop={true}
            watchSlidesProgress={true}
            centeredSlides={true}
            freeMode={{enabled: true}}
            navigation={true}
        >
            <div className="swiper-container">
                <div className="swiper-wrapper">

                    <SwiperSlide>
                        <img
                            className="image"
                            src={getStaticPath(images[0])}
                            alt="img"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="image"
                            src={getStaticPath(images[1])}
                            alt="img"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="image"
                            src={getStaticPath(images[2])}
                            alt="img"
                        />
                    </SwiperSlide>
                </div>

                <div>
                    Challenging Ordinary
                </div>

                <div className="swiper-button-next"/>
                <div className="swiper-button-prev"/>
            </div>
        </Swiper>
    );
}

export default SwiperSection;