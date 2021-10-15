import React from 'react'
import Image from 'next/image'
import cls from './Products.module.css'
import cannon from '../../public/cannon.jpg'
import ProductLogo from '../../public/ProductLogo.jpg'
import belomonTLogo from '../../public/belomonTLogo.jpg'
import Logoo from '../../public/Logoo.jpg'
import logooo from '../../public/logooo.jpg'
import "swiper/css/pagination"
import "swiper/css/navigation"
import Img from '../../public/Brr.jpg'
import { Vector } from "../svg";

import { Swiper, SwiperSlide, } from 'swiper/react';
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import 'swiper/css';
SwiperCore.use([Pagination, Navigation]);

export default function Products() {
    return (
        <>

            <div className={cls.TitleContainer}>
                <div className={cls.Title}>
                    <p className={cls.ForLine}></p>
                    <h1 className={cls.LogoTitle}>Продукты</h1>
                </div>
                <div className={cls.ImgsTitle}>
                    <div><Image className={cls.Telefon} src={cannon} alt="Picture of the author" /></div>
                    <div><Image className={cls.Telefon} src={ProductLogo} alt="Picture of the author" /></div>
                    <div><Image className={cls.Telefon} src={belomonTLogo} alt="Picture of the author" /></div>
                    <div><Image className={cls.Telefon} src={Logoo} alt="Picture of the author" /></div>
                    <div><Image className={cls.Telefon} src={logooo} alt="Picture of the author" /></div>
                </div>
            </div>

            <div>
                <Swiper
                    className={cls.AllFirst}
                    spaceBetween={50}
                    navigation={true}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className={cls.Swiper}>
                        <div className={cls.Container}>
                            <Image className={cls.Telefon} src={Img} alt="Picture of the author" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cls.Swiper}>
                        <div className={cls.Container}>
                            <Image className={cls.Telefon} src={Img} alt="Picture of the author" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cls.Swiper}>
                        <div className={cls.Container}>
                            <Image className={cls.Telefon} src={Img} alt="Picture of the author" />
                        </div>                    <SwiperSlide className={cls.Swiper}>
                        <div className={cls.Container}>
                            <Image className={cls.Telefon} src={Img} alt="Picture of the author" />
                        </div>
                    </SwiperSlide>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className={cls.ContainerBtn}>
                <button className={cls.BtnN}>Computed <br /> Tomography </button>
                <button className={cls.BtnN}>Magnetic <br /> Resonance </button>
                <button className={cls.Btn}>Ultrasound </button>
                <button className={cls.Btn}>X-Ray </button>
                <button className={cls.Btn}>X-Ray </button>
            </div>

            <div className={cls.Descriptionn}>
                <div className={cls.aaa}>
                    <h1 className={cls.DescriptionTitle}> Больше клиническихвозможностей Повышение продуктивности Получение экономической</h1>
                </div>
                <div className={cls.aaaa}>
                    <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ,обеспечивающий олее быструю работу с пациентами, эффективное сканирование сердца и новые возможности в диагностике.  </p>
                </div>
                <div className={cls.PDFContainer}>
                    <div>
                        <button className={cls.PDFbtn}>Cкачать PDF</button>
                    </div>
                    <div >
                        <p className={cls.PDFDescription}>Узнать подробнее  <span className={cls.Icn}><Vector></Vector></span></p>
                    </div>
                </div>
            </div>

        </>
    )
}




