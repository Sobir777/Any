import React from 'react'
import Image from 'next/image'
import title from '../../public/ServiseOne.png'
import cls from './Servise.module.css'
import { ServiseOne, ServiseTwo, ServiseThree, HomeAbout, IconAbout } from '../svg'

export default function FirstDetail() {
    return (
        <>  
            <div className={cls.logoTitle}>
                <HomeAbout />
                <IconAbout />
                <p className={cls.descriptionOne}>Сервис и поддержка </p>
            </div>
            <div className={cls.container} >
                <div className={cls.Service}>
                    <h1 className={cls.titleeService}>Сервис и поддержка</h1>
                    <p className={cls.descriptionService}>АСЦН — это крупнейший сервисный центр в России, который более 20 лет оказывает сервисные услуги по ремонту касс, весов, упаковщиков, ТСД и обслуживанию ИТ инфраструктуры для торговых сетей. География покрытия сервиса простирается от Владивостока до Калининграда. Наши центры и представительства находятся во всех городах с населением от 50 тыс. человек.</p>
                    <button className={cls.btnService}>Задать вопрос</button>
                </div>

                <div className={cls.titleImg}><Image src={title} alt="Picture of the author" />
                </div>
                <button className={cls.btnServicee}>Задать вопрос</button>
            </div>
            <div className={cls.organize}>
                <h1 className={cls.organizeTitle}>Сервисы, которые мы можем организовать:</h1>
                <p className={cls.organizeDescription}>Нужен драйвер или руководство по использованию системы? Вас интересует возможность проведения загрузок последних обновлений или получения актуальной технической информации? Хотите узнать, какая гарантия распространяется на используемую вами продукцию, или получить контактную информацию для обращения в службу гарантийного обслуживания? Вы сможете воспользоваться всей этой полезной информацией, посетив наши разделы сайта.</p>

                <div className={cls.threeType}>
                    <div className={cls.smollContainer}>
                        <ServiseOne />
                        <p className={cls.DescriptiOn}>Обслуживание и ремонт <br /> расчётно-кассового узла, весового и упаковочного оборудования</p>
                    </div>
                    <div className={cls.smollContainer}>
                        <ServiseTwo />
                        <p className={cls.DescriptIon}>Аутсорсингит <br /> ИТ  Инфраструктуры</p>
                    </div>
                    <div className={cls.smollContainer}>    
                        <ServiseThree />
                        <p className={cls.Description}>Пуско-наладочные работы <br /> по открытию торговых объектов</p>
                    </div>
                </div>
            </div>
            <h1 className={cls.technicalTitle}>Служба технической поддержки</h1>
            <div className={cls.technical}>
                <p className={cls.technicalDesciption}>В случае, если вы считаете, что ваше устройство неисправно и требует ремонта, мы рекомендуем сначала связаться с нашей службой технической поддержки. Очень вероятно, что проблема решается удаленно и у вас не будет необходимости посещать сервис. <br /> <br />  Если специалисты группы Технической поддержки не смогут решить вашу проблему удаленно (по телефону или по электронной почте), вам будет, в зависимости от типа гарантийных обязательств на неисправное оборудование, рекомендовано:
                </p>
                <br />
                <ul>
                    <li className={cls.technicalText}>
                        обратиться в один из наших авторизованных сервисных центров. В этом случае вам будет необходимо доставить неисправное оборудование в сервисный центр самостоятельно. При этом вам будет сообщен адрес ближайшего к вам сервисного центра;
                    </li>
                    <br />
                    <li className={cls.technicalText}>
                        будет зарегистрирована заявка на ремонт. В этом случае с вами свяжутся непосредственно представители сервисного центра и согласуют с вами либо ремонт оборудования на месте его установки, либо согласуют курьерскую доставку оборудования в сервисный центр. Способ ремонта оборудования в данном случае зависит от типа гарантийных обязательств на неисправное оборудование.
                    </li>
                </ul>
            </div>
            <div className={cls.contract}>
                <h1 className={cls.contractTitle}>Заявка на заключение сервисного договора</h1>
                <div className={cls.contractInput}>
                        <div>
                            <p className={cls.label}>Имя <span className={cls.cOlor}>*</span></p>
                            <input className={cls.input} type="text" placeHolder="Адам Джонсон"  ></input>
                            <p className={cls.telefone}>Телефон <span className={cls.cOlor}>*</span></p>
                            <input className={cls.input} type="number" placeHolder="Телефон  "  ></input>
                        </div>
                        <div className={cls.carta}>
                            <p className={cls.label}>Сообщение <span className={cls.cOlor}>*</span></p>
                            <textarea className={cls.Comment} name="comments" placeHolder="Сообщение"> </textarea>
                        </div>
                </div>
                <div className={cls.contractSend}>
                    <p className={cls.contractDescription}>По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.</p>
                    <button className={cls.contractBtn}>Отправить</button>
                </div>
            </div>


        </>
    )
}