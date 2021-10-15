
import React from "react";
import Title from "../Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";
// install Swiper modules
import cls from "../Video/video.module.css"
import { videoCard } from "../Cards/moc_data/videslider";

export default function Video() {
    return (
        <>
            <div className={cls.videoItem}>
                <div className={cls.videoText}>
                    <Title name="Видео" />
                    <p className={cls.clsDescription}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами, эффективное сканирование сердца и новые возможности в диагностике.</p>
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

                            <SwiperSlide key={video.id}><img src={video} /></SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </>
    )
}