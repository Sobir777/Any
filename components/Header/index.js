import React from 'react'
import Image from 'next/image'
import cls from './header.module.css'
import LOGo from '../../public/Vector.png'
import LOGoo from '../../public/Vectorr.jpg'
import Telefon from '../../public/telefoN.png'

export default function Header() {
    return (
        <>    

            <div className={cls.HaderContainer}>
                <div className={cls.HaderImgComponent}>
                    <div className={cls.IMGContainer}>
                        <Image className={cls.BigIMG} src={LOGoo} alt="Picture of the author" />
                        <Image className={cls.BigIMGd} src={LOGo} alt="Picture of the author" />
                    </div>
                    <div>
                        <p className={cls.DescriptionLogo}>
                            Медицинские
                            технологии из японии
                        </p>
                    </div>
                </div>

                <div className={cls.HaderImgComponentRight}>
                <call/>

                    <Image className={cls.TleFon} src={Telefon} alt="Picture of the author" />
                    <div className={cls.Namber}>
                        <p className={cls.number}>+998 97 353 31 33</p>
                        <p className={cls.text}>нажмите чтобы позвонить</p>
                    </div>
                    <button className={cls.buttom}>Заказат звонок</button>  
                </div>
            </div>

            <div className={cls.HaderComponentTwo}>
                <button className={cls.btnAllOne}>главная</button>
                <button className={cls.btnAll}>о компании</button>
                <button className={cls.btnAll}>сервисы</button>
                <button className={cls.btnAll}>продукты</button>
                <button className={cls.btnAll}>События</button>
                <button className={cls.btnAll}>Проекты</button>
                <button className={cls.btnAll}>решения подключ</button>
                <button className={cls.btnAll}>Контакты</button>
            </div>
        </>
    )
}
