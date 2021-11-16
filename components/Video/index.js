import React from "react";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Ttitle from "../Title/index"
import cls from "../Video/video.module.css"
import { videoCard } from "../Cards/moc_data/videslider";
import ReactPlayer from 'react-player'
export default function Video() {
    return (
        <>
            <div className={cls.videoItem}>
                <div className={cls.videoText}>
                    <Title titleOne="Видео" />
                    <p className={cls.Description}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами, эффективное сканирование сердца и новые возможности в диагностике.</p>
                </div>
                <div>

                    <Swiper
                        navigation={true}   
                        slidesPerView={2}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        className="videoSlider"
                    >
                        {videoCard?.map(({ video }, index) =>

                            <SwiperSlide key={video.id}>
                                {/* <img src={video} /> */}
                                <ReactPlayer url={video} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>



        </>
    )
}