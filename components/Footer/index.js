import React from 'react'
import cls from './footer.module.css'
import Image from 'next/image'
import { Instagram, Vectorr, Twitter, Facebook, Youtube, Call } from "../svg";


export default function Footer() {
    return (
        <>
            <div className={cls.imgLogo}></div>

            <div className={cls.containerFooter}>
                <div className={cls.secontComponent}>
                    <div className={cls.aboutCompany}>
                        <h1 className={cls.titleLoGO}>О компании</h1>
                        <p className={cls.descriptionn}>Система Aquilion Prime SP разработана для своевременного выполнения клинических задач.</p>
                        <div className={cls.componenT}>
                            <Vectorr></Vectorr>
                            <p className={cls.imageDescription}>Медицинские технологии из японии</p>
                        </div>
                    </div>
                    <div className={cls.quikLinks}>
                        <h1 className={cls.titleLOgo}>Быстрые ссылки</h1>
                        <div className={cls.descriptiON}>
                            <span>главная</span> <span>Проекты</span>
                        </div>
                        <div className={cls.descriptiON}>
                            <span>о компании</span> <span>FAQ</span>
                        </div>
                        <div className={cls.descriptiON}>
                            <span>Сервисы</span> <span>События</span>
                        </div>
                        <div>
                            <span>Контакты</span>
                        </div>
                    </div>
                </div>  
                <div className={cls.secontComponentt}>
                    <div className={cls.address}>
                        <h1 className={cls.titleLOGo}>адрес</h1>
                        <p className={cls.descriptIoN}>Мирзо-Улугбекскийул. ЧУСТ, 1 100077</p>
                    </div>
                    <div className={cls.cntacts}>
                        <h1 className={cls.titleLOGo}>контакты</h1>
                        <div><Call></Call>+998 (95) 475 05 85</div>
                        <div className={cls.telContainer}><Call></Call>+998 (97) 353 31 33</div>
                        <div className={cls.componentIcon}>
                            <Instagram></Instagram>
                            <Twitter></Twitter>
                            <Facebook></Facebook>
                            <Youtube></Youtube>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cls.line}>
                <p >
                    © 2020 · Все права защищены
                </p>
            </div>
        </>
    )
}