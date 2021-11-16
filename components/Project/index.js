import React from 'react'
import cls from './project.module.css'
import Image from 'next/image'
import imgTwo from '../../public/projectTitle.png'
import imgOne from '../../public/project.png'
import { IconAbout, HomeAbout } from '../svg'
import Link from 'next/link'


export default function EventDetail() {

    return (    
        <> 
            <div className={cls.logoTitle}> 
                <HomeAbout />
                <IconAbout />
                <p className={cls.descriptiondirections}>События </p>
            </div>

            <div className={cls.imgContainer}>
                <Image  src={imgTwo} alt="Picture of the author" />
            </div>
            <div className={cls.containerBtn}>
                <button className={cls.btnOne}>Все</button>
                <button className={cls.btnTwo}>Бизнес-центры</button>
                <button className={cls.btnThree}>Промышленные объекты</button>
                <button className={cls.btnFore}>Жилые помещения</button>
                <button className={cls.btnFive}>Объекты инфраструктуры</button>
            </div>

            <div className={cls.lastComponent}>
                <div className={cls.shchelkovskyBusStation}>
                    <div className={cls.imgimg}><Image className={cls.thisImg}  src={imgOne} alt="Picture of the author" /></div>
                    <div className={cls.imgTexxt}>
                        <h1 className={cls.title}>Щелковский автовокзал</h1>
                        <h1 className={cls.logo}>Решение</h1>
                        <p className={cls.description}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logo}>Услуги</h1>
                        <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logoo}>Выполненная работа:</h1>
                        <p className={cls.descriptionno}>Сделайте каждое сканирование максимально безопасным</p>
                        <Link href="/projectDetail"><p className={cls.descColor}>Узнать подробнее  <span><IconAbout /></span> </p></Link>
                    
                    </div>
                </div>
                <div className={cls.shchelkovskyBusStation}>
                    <div className={cls.imgimg}><Image className={cls.thisImg}  src={imgOne} alt="Picture of the author" /></div>
                    <div className={cls.imgTexxt}>
                        <h1 className={cls.title}>Щелковский автовокзал</h1>
                        <h1 className={cls.logo}>Решение</h1>
                        <p className={cls.description}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logo}>Услуги</h1>
                        <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logoo}>Выполненная работа:</h1>
                        <p className={cls.descriptionno}>Сделайте каждое сканирование максимально безопасным</p>
                        <Link href="/projectDetail"><p className={cls.descColor}>Узнать подробнее  <span><IconAbout /></span> </p></Link>
                    
                    </div>
                </div>
                <div className={cls.shchelkovskyBusStation}>
                    <div className={cls.imgimg}><Image className={cls.thisImg}  src={imgOne} alt="Picture of the author" /></div>
                    <div className={cls.imgTexxt}>
                        <h1 className={cls.title}>Щелковский автовокзал</h1>
                        <h1 className={cls.logo}>Решение</h1>
                        <p className={cls.description}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logo}>Услуги</h1>
                        <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logoo}>Выполненная работа:</h1>
                        <p className={cls.descriptionno}>Сделайте каждое сканирование максимально безопасным</p>
                        <Link href="/projectDetail"><p className={cls.descColor}>Узнать подробнее  <span><IconAbout /></span> </p></Link>
                    
                    </div>
                </div>
                <div className={cls.shchelkovskyBusStation}>
                    <div className={cls.imgimg}><Image className={cls.thisImg}  src={imgOne} alt="Picture of the author" /></div>
                    <div className={cls.imgTexxt}>
                        <h1 className={cls.title}>Щелковский автовокзал</h1>
                        <h1 className={cls.logo}>Решение</h1>
                        <p className={cls.description}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logo}>Услуги</h1>
                        <p className={cls.descriptionn}>Сделайте каждое сканирование максимально безопасным с помощью продвинутого ИИ.</p>
                        <h1 className={cls.logoo}>Выполненная работа:</h1>
                        <p className={cls.descriptionno}>Сделайте каждое сканирование максимально безопасным</p>
                        <Link href="/projectDetail"><p className={cls.descColor}>Узнать подробнее  <span><IconAbout /></span> </p></Link>
                    
                    </div>
                </div>
            </div>
            
            <div className={cls. containerShowMore}>
                <button className={cls.showMore}>Показать больше</button>
            </div>

        </>
    )
}


