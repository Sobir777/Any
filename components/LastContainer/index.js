import React from 'react'
import Image from 'next/image'
import cls from './Last.module.css'
import wrapper from '../../public/wrapper.jpg'

import { Vector } from "../svg";

export default function Products() {
    return (
        <>
            <div className={cls.containerr}>    
                <div className={cls.container}>

                    <div className={cls.textComonenet}>
                        <div>
                            <h1>Свяжись с нами</h1>
                            <p className={cls.descriptionFirst}>Имя <span className={cls.cOlor}>*</span></p>
                            <div className={cls.containerimput}>
                                <input className={cls.input} type="text" placeHolder="Адам Джонсон"  ></input>
                            </div>
                            <p className={cls.description}>Адрес электронной почты <span className={cls.cOlor}>*</span></p>
                            <input className={cls.input} type="text" placeHolder="Адрес электронной почты *"  ></input>
                            <p className={cls.description}>Сообщение <span className={cls.cOlor}>*</span></p>
                            <textarea className={cls.Comment} name="comments" />

                        </div>  
                    </div>  

                    <div className={cls.MapsComponent}>
                        <iframe className={cls.mapKarta} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2997.9427965442424!2d69.35251179338533!3d41.28834941701834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20metro!5e0!3m2!1sru!2s!4v1635008247074!5m2!1sru!2s"
                            width="720px"
                            
                            height="627px" allowfullscreen="" loading="lazy"></iframe>

                    </div>

                </div>
            </div>  
        </>
    )
}




