import React from 'react'
import Image from 'next/image'
import cls from './First.module.css'
import title from '../../public/cannon.jpg'
import titleTwo from '../../public/cannonTwo.jpg'
import RightOne from '../../public/Product.jpg'
import RigthTwo from '../../public/SLIDERNAV.jpg'
import "swiper/css/pagination"
import "swiper/css/navigation"
import Img from '../../public/Image.jpg'
import { Swiper, SwiperSlide, } from 'swiper/react';
import SwiperCore, {    
    Pagination,Navigation
  } from 'swiper';
import 'swiper/css';

SwiperCore.use([Pagination,Navigation]);
export default function First() {
    return (
        <>
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
                        <div className={cls.leftContainer}>
                            <Image className={cls.Telefon} src={title} alt="Picture of the author" />
                            <h1 className={cls.LOgo}>Ультраспиральная КТс 80 рядами детекторов</h1>
                            <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами,  эффективное сканирование сердца и новые возможности</p>
                            <button className={cls.BtnLogo}>Узнать подробнее</button>
                            <div className={cls.Conconnon}>
                                <Image className={cls.Telefon} src={titleTwo} alt="Picture of the author" />
                            
                            </div>
                        </div>
                        <div className={cls.ConImgs}>
                            <div>
                                <Image src={Img} alt="Picture of the author" />
                            </div>
                            <div className={cls.Imgs}>
                                <Image className={cls.FirstImgs} src={RightOne} alt="Picture of the author" />
                                <Image src={RigthTwo} alt="Picture of the author" />
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.Swiper}>
                    <div className={cls.Container}>
                        <div className={cls.leftContainer}>
                            <Image className={cls.Telefon} src={title} alt="Picture of the author" />
                            <h1 className={cls.LOgo}>Ультраспиральная КТс 80 рядами детекторов</h1>
                            <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами,  эффективное сканирование сердца и новые возможности</p>
                            <button className={cls.BtnLogo}>Узнать подробнее</button>
                            <div className={cls.Conconnon}>
                                <Image className={cls.Telefon} src={titleTwo} alt="Picture of the author" />
                            </div>
                        </div>
                        <div className={cls.ConImgs}>
                            <div>
                                <Image src={Img} alt="Picture of the author" />
                            </div>
                            <div className={cls.Imgs}>
                                <Image className={cls.FirstImgs} src={RightOne} alt="Picture of the author" />
                                <Image src={RigthTwo} alt="Picture of the author" />
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.Swiper}>
                    <div className={cls.Container}>
                        <div className={cls.leftContainer}>
                            <Image className={cls.Telefon} src={title} alt="Picture of the author" />
                            <h1 className={cls.LOgo}>Ультраспиральная КТс 80 рядами детекторов</h1>
                            <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами,  эффективное сканирование сердца и новые возможности</p>
                            <button className={cls.BtnLogo}>Узнать подробнее</button>
                            <div className={cls.Conconnon}>
                                <Image className={cls.Telefon} src={titleTwo} alt="Picture of the author" />
                            </div>
                        </div>
                        <div className={cls.ConImgs}>
                            <div>
                                <Image src={Img} alt="Picture of the author" />
                            </div>
                            <div className={cls.Imgs}>
                                <Image className={cls.FirstImgs} src={RightOne} alt="Picture of the author" />
                                <Image src={RigthTwo} alt="Picture of the author" />
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.Swiper}>
                    <div className={cls.Container}>
                        <div className={cls.leftContainer}>
                            <Image className={cls.Telefon} src={title} alt="Picture of the author" />
                            <h1 className={cls.LOgo}>Ультраспиральная КТс 80 рядами детекторов</h1>
                            <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами,  эффективное сканирование сердца и новые возможности</p>
                            <button className={cls.BtnLogo}>Узнать подробнее</button>
                            <div className={cls.Conconnon}>
                                <Image className={cls.Telefon} src={titleTwo} alt="Picture of the author" />
                            </div>
                        </div>
                        <div className={cls.ConImgs}>
                            <div>
                                <Image src={Img} alt="Picture of the author" />
                            </div>
                            <div className={cls.Imgs}>
                                <Image className={cls.FirstImgs} src={RightOne} alt="Picture of the author" />
                                <Image src={RigthTwo} alt="Picture of the author" />
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className={cls.Swiper}>
                    <div className={cls.Container}>
                        <div className={cls.leftContainer}>
                            <Image className={cls.Telefon} src={title} alt="Picture of the author" />
                            <h1 className={cls.LOgo}>Ультраспиральная КТс 80 рядами детекторов</h1>
                            <p className={cls.DescriptionLogo}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами,  эффективное сканирование сердца и новые возможности</p>
                            <button className={cls.BtnLogo}>Узнать подробнее</button>
                            <div className={cls.Conconnon}>
                                <Image className={cls.Telefon} src={titleTwo} alt="Picture of the author" />
                            </div>
                        </div>
                        <div className={cls.ConImgs}>
                            <div>
                                <Image src={Img} alt="Picture of the author" />
                            </div>
                            <div className={cls.Imgs}>
                                <Image className={cls.FirstImgs} src={RightOne} alt="Picture of the author" />
                                <Image src={RigthTwo} alt="Picture of the author" />
                            </div>

                        </div>

                    </div>
                </SwiperSlide>




            </Swiper>   





        </>
    )
}

