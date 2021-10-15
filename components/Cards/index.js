import React from 'react'
import cls from './Cards.module.css'
import Image from 'next/image'
import { advantage } from './moc_data/mocdata'
import Smoltitle from '../../public/Group.jpg'

export default function Cards() {
    return (
        <>
            <div className={cls.FirstCon}>
                <div className={cls.TitleContainer}>
                    <p className={cls.ForLine}></p>
                    <h1 className={cls.LogoTitle}>Преимущество</h1>
                    <h1 className={cls.Logo}>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством</h1>
                </div>
            </div>
            
                <div className={cls.CardContainer}>
                    {advantage.map((item) => (
                        <div className={cls.Container}>
                            <div className={cls.ContainerCards}>
                                <div className={cls.ImgSmoll}>

                                    {/* <Image className={cls.CadsImg} src={Smoltitle} alt="Picture of the author" /> */}

                                    {item.img}
                                </div>
                                <p className={cls.CadsTitle}>{item.title}</p>
                                <p className={cls.CadsLogo}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cls.CardContainer}>
                    {advantage.map((item) => (
                        <div className={cls.Container}>
                            <div className={cls.ContainerCards}>
                                <div className={cls.ImgSmoll}>

                                    {/* <Image className={cls.CadsImg} src={Smoltitle} alt="Picture of the author" /> */}

                                    {item.img}
                                </div>
                                <p className={cls.CadsTitle}>{item.title}</p>
                                <p className={cls.CadsLogo}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

        </>
    )
}
