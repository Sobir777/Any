import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cls from './ProductTwo.module.css'
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
            <div className={cls.titleContainer}>
                <div className={cls.title}>
                    <p className={cls.line}></p>
                    <h1 className={cls.logoTitle}>Подключ</h1>
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
            <div className={cls.Descriptionn}>
                <div className={cls.productTitle}>
                    <h1 className={cls.productTitle}> Больше клиническихвозможностей Повышение продуктивности Получение экономической</h1>
                </div>

                <div className={cls.productDescription}>
                    <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ,обеспечивающий олее быструю работу с пациентами, эффективное сканирование сердца и новые возможности в диагностике.  </p>
                </div>

                <div className={cls.moreContainer}>
                    <div>
                        <button className={cls.morebBtn}>Cкачать PDF</button>
                    </div>
                    <Link href="/firstDetail" >
                        <div className={cls.moreLinkCon}>
                            <p className={cls.moreLink}  >Узнать подробнее  </p><Vector></Vector>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )   
}
