import React from 'react'
import cls from './About.module.css'
import Image from 'next/image'
import { HomeAbout, IconAbout, Aboutthree } from '../svg'
import ImgOne from '../../public/AboutOne.png'
import ImgTwo from '../../public/AboutTwo.png'  
import Imgthree from '../../public/AbouTthree.png'
import ImgFore from '../../public/AboutFore.png'
import ImgFive from '../../public/AboutFive.png'

export default function Cards() {
    return (
        <>
            <div className={cls.bigContainer}>
                <div className={cls.container}>
                    <div className={cls.titleAbout}>
                        <HomeAbout />
                        <IconAbout />
                        <Aboutthree />
                    </div>

                    <div className={cls.ourMissionContainer}>

                        <div className={cls.FirstImg}><Image className={cls.FirstImgg} src={ImgOne} alt="Picture of the author" /></div>

                        <div className={cls.ourMissionAll}>
                            <div className={cls.ImgFore}>
                                <Image className={cls.ImgFore} src={ImgFore} alt="Picture of the author" />
                            </div>
                            <h1 className={cls.ourMissionImg}>Наша миссия</h1>
                            <p className={cls.ourMissionDescription}>qqПредварительные выводы неутешительны: сложившаяся структура организации создаёт предпосылки для новых принципов формирования материально-технической и кадровой базы. Идейные соображения высшего порядка, а также социально-экономическое развитие предполагает.</p>
                        </div>
                    </div>

                    <div className={cls.onlyImgContainer}><Image src={ImgFive} alt="Picture of the author" /></div>
                    <div className={cls.OurVision}>
                        <div className={cls.logoTitle}>
                            <h1 className={cls.secondTitle}>Наше видение</h1>
                            <p className={cls.OurVisionDescription}>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки первоочередных требований.</p>
                            <p className={cls.OurVisionDescriptionn}>Современные технологии достигли такого уровня, что консультация с широким активом однозначно фиксирует необходимость экономической целесообразности принимаемых решений.</p>
                        </div>
                        <div className={cls.imgs}>
                            <div>
                                <Image src={ImgTwo} alt="Picture of the author" />

                            </div>
                            <div className={cls.secondImg}>
                                <Image src={Imgthree} alt="Picture of the author" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cls.titleContaineer}><h1>Свяжись с нами</h1></div>
            <div className={cls.containerr}>
                <div className={cls.textComonenet}>

                    <p className={cls.descriptionFirst}>Имя <span className={cls.cOlor}>*</span></p>
                    <input className={cls.input} type="text" placeHolder="Адам Джонсон"  ></input>
                    <p className={cls.description}>Адрес электронной почты <span className={cls.cOlor}>*</span></p>
                    <input className={cls.input} type="text" placeHolder="hopemedical@gmail.com"  ></input>
                </div>
                <div className={cls.comentComonenet} >
                    <p className={cls.description}>Сообщение <span className={cls.cOlor}>*</span></p>
                    <textarea className={cls.Comment} name="comments" />
                </div>
            </div>
            <div className={cls.MapsComponentt}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2997.9427965442424!2d69.35251179338533!3d41.28834941701834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20metro!5e0!3m2!1sru!2s!4v1635008247074!5m2!1sru!2s"
                    width="100%"
                    height="405px" allowfullscreen="" loading="lazy"></iframe>

            </div>

            

        </>
    )
}