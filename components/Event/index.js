import React from 'react'
import Image from 'next/image'
import imgTwo from '../../public/birinchiRasim.png'
import { EventTwo, EventOne, IconAbout, HomeAbout } from '../svg'
import { EventsCard } from '../Cards/moc_data/eventsCard'
import Link from 'next/link'
import cls from './Event.module.css'

export default function Cards() {

    return (
        <>
            <div className={cls.logoTitle}>
                <HomeAbout />
                <IconAbout />
                <p className={cls.descriptionOne}>События </p>
            </div>

            <div className={cls.imgContainer}>
                <Image src={imgTwo} alt="Picture of the author" />
            </div>
            <div className={cls.titleBtnSearch}>
                <div className={cls.containerBtn}>
                    <button className={cls.first}> <span ><EventTwo /></span> Все</button>
                    <button className={cls.second}> <span ><EventTwo /></span>  Активный</button>
                    <button className={cls.second}> <span ><EventTwo /></span> Признакам</button>
                </div>
                <div className={cls.search}>
                    <EventOne />
                    <input className={cls.input} placeholder="   Поиск..."></input>
                </div>
            </div>

            <Link href="/eventDetail">

                <div className={cls.moreCards}>
                    <div className={cls.cardsContainer}>
                        {EventsCard?.map((item, index) => (
                            <div key={index} className={cls.mapThings}>
                                <img className={cls.mapImg} src={item.img} />
                                <p className={cls.mapTitle}>{item.text}</p>
                                <p className={cls.mapDescription}>{item.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </Link>
            <div className={cls.bTnContainer}><button className={cls.bTn}>Показать больше</button></div>

        </>
    )
}