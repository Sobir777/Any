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
    Pagination, Navigation
} from 'swiper';
import 'swiper/css';    

SwiperCore.use([Pagination, Navigation]);
export default function First({banner}) {
    console.log(banner ,'banner')
    return (
        <>
            <Swiper
                className={cls.AllFirst}
                spaceBetween={50}
                navigation={true}
                loop={true}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
               
{banner.length && banner.map((item)=>(
    <>
     <SwiperSlide className={cls.Swiper}>
                    <div className={cls.container}> 
                        <div className={cls.textContainer}>
                            <div className={ cls.titleImg}>
                                <Image className={cls.Telefonnn} src={title} alt="Picture of the author" />
                            </div>
                            <h1 className={cls.lOgo}>{item.title}</h1>
                            <p className={cls.description}>{item.description}</p>
                            <button className={cls.btn}>Узнать подробнее</button>
                            <div className={cls.textImg}>
                                <Image className={cls.Telefon} src={titleTwo} alt="Picture of the author" />

                            </div>  
                        </div>
                        <div className={cls.containerImgs}>
                            <div>
                      
                         
                                <img src={item?.image[0]?.url} alt="Picture of the author" />

                             
                            </div>
                            <div className={cls.Imgs}>
                                <Image src={RightOne} alt="Picture of the author" />
                                <Image src={RigthTwo} alt="Picture of the author" />
                            </div>

                        </div>

                    </div>
                </SwiperSlide>

    </>
))}


            </Swiper>





        </>
    )
}

