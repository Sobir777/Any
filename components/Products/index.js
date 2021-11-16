import React from 'react'
import Image from 'next/image'

import cannon from '../../public/cannon.jpg'
import ProductLogo from '../../public/ProductLogo.jpg'
import belomonTLogo from '../../public/belomonTLogo.jpg'
import Logoo from '../../public/Logoo.jpg'
import logooo from '../../public/logooo.jpg'
import Img from '../../public/Brr.jpg'
import Link from 'next/link'
import { Swiper, SwiperSlide, } from 'swiper/react';
import "swiper/css/pagination"
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"

import { Vector } from "../svg";

import cls from './Products.module.css'

SwiperCore.use([Pagination, Navigation]);

export default function Products() {
    return (
        <>

            <div id="productq" className={cls.titleContainer}>
                <div className={cls.title}>
                    <p className={cls.line}></p>
                    <h1 className={cls.logoTitle}>Продукты</h1>
                </div>
                <div className={cls.imgsTitle}>
                    <div><Image src={cannon} alt="Picture of the author" /></div>
                    <div><Image src={ProductLogo} alt="Picture of the author" /></div>
                    <div><Image src={belomonTLogo} alt="Picture of the author" /></div>
                    <div><Image src={Logoo} alt="Picture of the author" /></div>
                    <div><Image src={logooo} alt="Picture of the author" /></div>
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
                            <Image src={Img} alt="Picture of the author" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cls.Swiper}>
                        <div className={cls.Container}>
                            <Image src={Img} alt="Picture of the author" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={cls.Swiper}>
                        <div className={cls.Container}>
                            <Image src={Img} alt="Picture of the author" />
                        </div>                    <SwiperSlide className={cls.Swiper}>
                            <div className={cls.Container}>
                                <Image src={Img} alt="Picture of the author" />
                            </div>
                        </SwiperSlide>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className={cls.filterBtn}>
                <button className={cls.btnTwo}>Computed <br /> Tomography </button>
                <button className={cls.btnTwo}>Magnetic <br /> Resonance </button>
                <button className={cls.btn}>Ultrasound </button>
                <button className={cls.btn}>X-Ray </button>
                <button className={cls.btn}>X-Ray </button>
            </div>  

            <div className={cls.Descriptionn}>
                <div className={cls.productTitle}>
                    <h1 className={cls.productTitle}> Больше клиническихвозможностей Повышение продуктивности Получение экономической</h1>
                </div>

                <div className={cls.productDescription}>
                    <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ,обеспечивающий олее быструю работу с пациентами, эффективное сканирование сердца и новые возможности в диагностике.  </p>
                </div>

                <div className={cls.moreContainer}>
                    <button className={cls.morebBtn}>Cкачать PDF</button>
                    <Link href="/firstDetail"><p className={cls.moreLink}>Узнать подробнее  <span className={cls.Icn}><Vector></Vector></span></p></Link> 
                </div>
            </div>
        </>
    )
}




