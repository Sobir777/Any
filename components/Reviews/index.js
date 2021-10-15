import React, { useRef, useState } from "react";
import cls from './Reviews.module.css'
import Image from 'next/image'
import titlee from '../../public/profile.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);


export default function App() {
    return (
        <>
            <Swiper

                loop={true}
                pagination={{

                    "dynamicBullets": true

                }} className="mySwiper">
                <SwiperSlide>
                    <div className={cls.containerBig}>
                        <div className={cls.containerbig}>
                            <div className={cls.FirstCon}>
                                <div className={cls.TitleContainer}>
                                    <p className={cls.ForLine}></p>
                                    <h1 className={cls.LogoTitle}>Отзывы</h1>
                                </div>
                            </div>
                            <div className={cls.imgCon}>
                                <div>
                                    <Image className={cls.title} src={titlee} alt="Picture of the author" />
                                </div>
                                <div className={cls.containerDescription}>
                                    <h1 className={cls.logo}>Joe Bloggs</h1>
                                    <p className={cls.title}>Designer</p>
                                    <p className={cls.descriptionn}>Обширный ряд интегрированных приложений обеспечивает легкое и быстрое
                                        внедрение последних КТ-технологий в вашу клиническую практику. Система Aquilion Prime SP может автоматизировать.</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                <div className={cls.containerBig}>
                        <div className={cls.containerbig}>
                            <div className={cls.FirstCon}>
                                <div className={cls.TitleContainer}>
                                    <p className={cls.ForLine}></p>
                                    <h1 className={cls.LogoTitle}>Отзывы</h1>
                                </div>
                            </div>
                            <div className={cls.imgCon}>
                                <div>
                                    <Image className={cls.title} src={titlee} alt="Picture of the author" />
                                </div>
                                <div className={cls.containerDescription}>
                                    <h1 className={cls.logo}>Joe Bloggs</h1>
                                    <p className={cls.title}>Designer</p>
                                    <p className={cls.descriptionn}>Обширный ряд интегрированных приложений обеспечивает легкое и быстрое
                                        внедрение последних КТ-технологий в вашу клиническую практику. Система Aquilion Prime SP может автоматизировать.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className={cls.containerBig}>
                        <div className={cls.containerbig}>
                            <div className={cls.FirstCon}>
                                <div className={cls.TitleContainer}>
                                    <p className={cls.ForLine}></p>
                                    <h1 className={cls.LogoTitle}>Отзывы</h1>
                                </div>
                            </div>
                            <div className={cls.imgCon}>
                                <div>
                                    <Image className={cls.title} src={titlee} alt="Picture of the author" />
                                </div>
                                <div className={cls.containerDescription}>
                                    <h1 className={cls.logo}>Joe Bloggs</h1>
                                    <p className={cls.title}>Designer</p>
                                    <p className={cls.descriptionn}>Обширный ряд интегрированных приложений обеспечивает легкое и быстрое
                                        внедрение последних КТ-технологий в вашу клиническую практику. Система Aquilion Prime SP может автоматизировать.</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                <div className={cls.containerBig}>
                        <div className={cls.containerbig}>
                            <div className={cls.FirstCon}>
                                <div className={cls.TitleContainer}>
                                    <p className={cls.ForLine}></p>
                                    <h1 className={cls.LogoTitle}>Отзывы</h1>
                                </div>
                            </div>
                            <div className={cls.imgCon}>
                                <div>
                                    <Image className={cls.title} src={titlee} alt="Picture of the author" />
                                </div>
                                <div className={cls.containerDescription}>
                                    <h1 className={cls.logo}>Joe Bloggs</h1>
                                    <p className={cls.title}>Designer</p>
                                    <p className={cls.descriptionn}>Обширный ряд интегрированных приложений обеспечивает легкое и быстрое
                                        внедрение последних КТ-технологий в вашу клиническую практику. Система Aquilion Prime SP может автоматизировать.</p>
                                </div>

                            </div>
                        </div>
                    </div>


                </SwiperSlide>





            </Swiper>
        </>
    )
}