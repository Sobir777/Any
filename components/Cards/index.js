import React, { Component } from 'react'
import cls from './Cards.module.css'
import { motion } from "framer-motion"
import { advantage } from './moc_data/mocdata'

// import ReactDOM from 'react-dom';
// import ClampLines from 'react-clamp-lines';

export default function Cards() {

    return (
        <>
            {/* <ClampLines
                text={text_to_clamp}
                id="really-unique-id"
                lines={4}
                ellipsis="..."
                moreText="Expand"
                lessText="Collapse"
                className="custom-class"
                innerElement="p"
            /> */}
            <motion.div
                transition={{ ease: "easeOut", duration: 4 }}
                animate={{ stdDeviation: [0, 5, 0] }}
                className={cls.title}>

                <div className={cls.titleContainer}>
                    <p className={cls.forLine}></p>
                    <h1 className={cls.logoTitle}>Преимущество</h1>
                    <h1 className={cls.logoDescription}>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством</h1>
                </div>
            </motion.div>

            <div className={cls.cardContainer}>
                {advantage.map((item) => (
                    <div className={cls.containerCards}>
                        <div className={cls.cards}>
                            <div className={cls.icon}>
                                {item.img}
                            </div>
                            <p className={cls.cadsTitle}>{item.title}</p>
                            <p className={cls.cadsLogo }>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>



        </>
    )
}
