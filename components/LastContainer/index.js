import React from 'react'
import Image from 'next/image'
import cls from './Last.module.css'


import { Vector } from "../svg";

export default function Products() {
    return (
        <>
            <div className={cls.container}>
                <div className={cls.left}>
                    <div>
                        <h1></h1>
                        <p></p>
                        <input className={cls.input}  type="text" placeHolder="Адам Джонсон"  ></input>
                        <p></p>
                        <input className={cls.input}  type="text" placeHolder="Адрес электронной почты *"  ></input>
                        <p></p>
                        <textarea className={cls.Comment} name = "comments"> Сообщение</textarea>

                    </div>
                </div>
                {/* afddddddddddddddddfdfdff */}
                <div className={cls.right}>




                </div>
            </div>
        </>
    )
}




