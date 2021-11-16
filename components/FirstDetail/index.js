import React from 'react'

import Image from 'next/image'

import ImgOne from '../../public/DetailOne.png'
import title from '../../public/cannon.jpg'
import titleTwo from '../../public/cannonTwo.jpg'
import ImgTwo from '../../public/DetailTwo.png'
import ImgThree from '../../public/Detailthree.png'
import ImgFore from '../../public/DetailFore.png'
import ImgFive from '../../public/DetailFive.png'
import RightOn from '../../public/logoq.png'
import Img from '../../public/Image.jpg'

import cls from './FirstDetail.module.css'

import { HomeAbout, IconAbout, } from '../svg'

export default function FirstDetail() {
    return (
        <>
            <div className={cls.titleContainer} >
                <HomeAbout />
                <IconAbout />
                <p className={cls.descriptionOne}>Продукты</p>
                <IconAbout />
                <p className={cls.descriptionTwo}>Ультраспиральная КТ с 80 рядами детекторов</p>
            </div>

            <div className={cls.container}>  

                <div className={cls.textContainer}>
                    <Image src={title} alt="Picture of the author" />
                    <h1 className={cls.lOgo}>Ультраспиральная КТс 80 рядами детекторов</h1>
                    <p className={cls.description}>Инновационная система Aquilion Prime SP — это аппарат КТ, обеспечивающий более быструю работу с пациентами,  эффективное сканирование сердца и новые возможности</p>
                    <button className={cls.btn}>Узнать подробнее</button>
                    <div className={cls.textImg}>
                        <Image src={titleTwo} alt="Picture of the author" />
                    </div>
                </div>
                <div className={cls.containerImgs}>
                    <div className={cls.titleImg}>
                        <Image src={Img} alt="Picture of the author" />
                    </div>
                    <div className={cls.Imgs}>
                        <Image src={RightOn} alt="Picture of the author" />
                    </div>
                </div>

            </div>
            <p className={cls.titleDesciption}>Make every scan as safe as possible with advanced AI-assisted technologies that keep the dose low and the image quality high. Stand out with a CT solution that optimizes your workflow, improves patient experience and helps you save time and money every step of the way. Access all the information you need to make a clear, confident diagnosis that enables every patient to start the right treatment journey for them.</p>

            <div className={cls.components}>
                <div className={cls.iMg}><Image className={cls.cardsImg} src={ImgFore} alt="Picture of the author" /></div>
                <div className={cls.desCripTioN}>
                    <h1 className={cls.title}>Щелковский автовокзал</h1>
                    <h1 className={cls.logo}>Решение</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Услуги</h1>
                    <p className={cls.descriptionSecond}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Выполненная работа:</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным</p>
                </div>
            </div>
            <div className={cls.componentss}>
                <div className={cls.desCripTioN}>
                    <h1 className={cls.title}>Щелковский автовокзал</h1>
                    <h1 className={cls.logo}>Решение</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Услуги</h1>
                    <p className={cls.descriptionSecond}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Выполненная работа:</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным</p>
                </div>
                <div className={cls.iMg}><Image className={cls.cardsImg} src={ImgFive} alt="Picture of the author" /></div>
            </div>
            <div className={cls.components}>
                <div className={cls.iMg}><Image className={cls.cardsImg} src={ImgOne} alt="Picture of the author" /></div>
                <div className={cls.desCripTioN}>
                    <h1 className={cls.title}>Щелковский автовокзал</h1>
                    <h1 className={cls.logo}>Решение</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Услуги</h1>
                    <p className={cls.descriptionSecond}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Выполненная работа:</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным</p>
                </div>
            </div>
            <div className={cls.componentss}>
                <div className={cls.desCripTioN}>
                    <h1 className={cls.title}>Щелковский автовокзал</h1>
                    <h1 className={cls.logo}>Решение</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Услуги</h1>
                    <p className={cls.descriptionSecond}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                    <h1 className={cls.logo}>Выполненная работа:</h1>
                    <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным</p>
                </div>
                <div className={cls.iMg}><Image className={cls.cardsImg} src={ImgTwo} alt="Picture of the author" /></div>
            </div>



            <div className={cls.containerLastComponent}>
                <div className={cls.lastComponent}>
                    <div className={cls.imgComponent}><Image className={cls.cardsImgg} src={ImgThree} alt="Picture of the author" /></div>
                    <div className={cls.desCriptionComponent}>
                        <h1 className={cls.titleComponent}>Начните свое путешествие по тайцзи: введение в основные навыки тайцзи</h1>
                        <p className={cls.logoComponent}>В преддверии сезона весенней уборки TFD предлагает вам ускоренный курс на полдня</p>
                    </div>

                </div>
                <div className={cls.lastComponent}>
                    <div className={cls.imgComponent}><Image className={cls.cardsImgg} src={ImgThree} alt="Picture of the author" /></div>
                    <div className={cls.desCriptionComponent}>
                        <h1 className={cls.titleComponent}>Начните свое путешествие по тайцзи: введение в основные навыки тайцзи</h1>
                        <p className={cls.logoComponent}>В преддверии сезона весенней уборки TFD предлагает вам ускоренный курс на полдня</p>
                    </div>

                </div>
                <div className={cls.lastComponent}>
                    <div className={cls.imgComponent}><Image className={cls.cardsImgg} src={ImgThree} alt="Picture of the author" /></div>
                    <div className={cls.desCriptionComponent}>
                        <h1 className={cls.titleComponent}>Начните свое путешествие по тайцзи: введение в основные навыки тайцзи</h1>
                        <p className={cls.logoComponent}>В преддверии сезона весенней уборки TFD предлагает вам ускоренный курс на полдня</p>
                    </div>

                </div>
            </div>

        </>
    )
}

