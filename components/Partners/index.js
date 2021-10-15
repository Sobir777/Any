import React from 'react'
import cls from './Partners.module.css'
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ImgOne } from "../svg";
import { ImgTwo } from "../svg";
import { ImgThree } from "../svg";
import { ImgFive } from "../svg";
import { ImgSeven } from "../svg";

import { Swiper, SwiperSlide, } from 'swiper/react';
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import 'swiper/css';
SwiperCore.use([Pagination, Navigation]);

export default function Partners() {
    return (
        <>
            <div className={cls.containeer}>
                    <Swiper
                        className={cls.AllFirst}
                        spaceBetween={1}
                        navigation={true}
                        loop={true}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide className={cls.swiperCard}>
                            <div className={cls.containerCard}>
                                <ImgOne></ImgOne>
                            </div>
                            <div className={cls.Container}>
                                <ImgTwo></ImgTwo>
                            </div>
                            <div className={cls.Container}>
                                <ImgThree></ImgThree>
                            </div>
                            <div className={cls.Container}>
                                <ImgFive></ImgFive>
                            </div>
                            <div className={cls.Container}>
                                <ImgSeven></ImgSeven>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cls.swiperCard}>
                            <div className={cls.containerCard}>
                                <ImgOne></ImgOne>
                            </div>
                            <div className={cls.Container}>
                                <ImgTwo></ImgTwo>
                            </div>
                            <div className={cls.Container}>
                                <ImgThree></ImgThree>
                            </div>
                            <div className={cls.Container}>
                                <ImgFive></ImgFive>
                            </div>
                            <div className={cls.Container}>
                                <ImgSeven></ImgSeven>
                            </div>
                        </SwiperSlide>


                    </Swiper>
            </div>
        </>
    )
}
