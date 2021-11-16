import React from 'react'
import Image from 'next/image'


import cls from './information.module.css'

import { HomeAbout, IconAbout } from '../svg'

export default function information() {
    return (    
        <>
            <div className={cls.logoTitle}>
                <HomeAbout />   
                <IconAbout />
                <p className={cls.descriptionOne}>Сервис и поддержка </p>
            </div>
            <div className={cls.titleContainer}>
                <h1 className={cls.title}>Контактная информация </h1>
                <p className={cls.description}>Вам нужна помощь или у вас есть вопросы относительно вашего продукта Hope Medical?Найдите ответ <span className={cls.color}>здесь</span>  или обратитесь к нам. Мы всегда готовы помочь.</p>
            </div>
            <div className={cls.personalData}>
                <div>
                    <div>
                        <h1 className={cls.titlePersonalData}>Личные данные</h1>
                        <p className={cls.label}>Имя <span className={cls.cOlor}>*</span></p>
                        <input className={cls.input} type="text" placeHolder="Адам "  ></input>
                        <p className={cls.telefone}>Фамилия   <span className={cls.cOlor}>*</span></p>
                        <input className={cls.input} placeHolder=" Джонсон  "  ></input>
                        <p className={cls.label}>Телефон  <span className={cls.cOlor}>*</span></p>
                        <input className={cls.input} type="number" placeHolder="+998 (__) ___ __ __"  ></input>
                        <p className={cls.telefone}>Адрес электронной почты  <span className={cls.cOlor}>*</span></p>
                        <input className={cls.input} placeHolder="example.@gmail.com  "  ></input>
                    </div>
                    <div>
                        <button className={cls.btn}>Отправить</button>
                    </div>
                </div>

                <div>
                    <div className={cls.carta}>
                        <h1 className={cls.titlePersonalData}>Связаться</h1>
                        <p className={cls.descriptionContact}>Свяжитесь с нами для поддержки и обслуживания. Наши сервисные команды будут рады помочь вам с техническими и другими вопросами, связанными с продуктами Hope Medical</p>
                        <p className={cls.numberContact}>+998 <span className={cls.number}>97 353 31 33</span>  </p>
                        <p className={cls.descriptionContactt}>Для всех общих запросов и информации о продукте</p>
                        <p className={cls.label}>Сообщение <span className={cls.cOlor}>*</span></p>
                        <textarea className={cls.Comment} name="comments" placeHolder="Сообщение"> </textarea>
                    </div>
                </div>
            </div>
        
            <div className={cls.MapsComponent}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2997.9427965442424!2d69.35251179338533!3d41.28834941701834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20metro!5e0!3m2!1sru!2s!4v1635008247074!5m2!1sru!2s"
                    width="100%"
                    height="405px" allowfullscreen="" loading="lazy"></iframe>

            </div>
        </>
    )
}