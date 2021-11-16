import React from 'react'
import cls from './header.module.css'
import Link from 'next/link'
import { Colll, VectoR } from '../svg'

export default function Header() {
    return (
        <>
            <div className={cls.haderContainer}>
                <div className={cls.brend}>
                    <div className={cls.icon}>
                        <VectoR></VectoR>
                    </div>
                    <div>
                        <p className={cls.descriptionLogo}>
                            Медицинские
                            технологии из японии
                        </p>
                    </div>
                </div>
                <div className={cls.touchin}>
                    <div className={cls.coltel}><Colll /></div>
                    <div className={cls.namber}>
                        <p className={cls.telefonNumber}>+998 <span className={cls.numberT}>97 353 31 33</span> </p>
                        <p className={cls.text}>нажмите чтобы позвонить</p>
                    </div>
                    <button className={cls.buttom}>Заказат звонок</button>
                </div>  
            </div>

            <div className={cls.navigationbtn}> 
                <Link href="/#"><a className={cls.btnOne}>главная</a></Link>
                <Link href="/about"><a className={cls.btn}>о компании</a></Link>
                <Link href="/servise"><a className={cls.btn}>сервисы</a></Link>
                <Link href="/#productq" ><a className={cls.btn}>продукты </a></Link>
                <Link href="/event"><a className={cls.btn}>События</a></Link>
                <Link href="/project"><a className={cls.btn}>Проекты</a></Link>
                <Link href="/firstDetail"><a className={cls.btnn}>решения подключ</a></Link>
                <Link href="/information"><a className={cls.btn}> Контакты</a></Link>


            </div>
        </>
    )
}

