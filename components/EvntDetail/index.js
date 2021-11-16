import React from 'react'
import cls from './eventDetail.module.css'
import Image from 'next/image'
import imgTwo from '../../public/EventDetailTwo.png'
import imgOne from '../../public/EventDetail.png'
import { IconAbout, HomeAbout } from '../svg'
import ClampLines from 'react-clamp-lines';
import { EventDetailaa, EventDetailLike } from '../svg'


export default function EventDetail() {

    return (
        <>
       
            <div className={cls.logoTitle}>
                <HomeAbout />
                <IconAbout />
                <p className={cls.descriptionOne}>События </p>
                <IconAbout />
                <p className={cls.descriptionOnes}>Начните свое путешествие по тайцзи: введение в основные навыки тайцзи</p>
            </div>
            <div className={cls.containerImg}>
                <div className={cls.titleImg}>
                    <div className={cls.CadsImgInto}>
                        <Image className={cls.CadsImgIntov} src={imgTwo} alt="Picture of the author" />
                    </div>
                </div>
            </div>
            <div className={cls.developmentsTitle}>
                <div className={cls.iconCantainer}>
                    <div className={cls.share}>
                        <EventDetailLike />
                        <p className={cls.shareDescription}>избранное </p>
                    </div>
                    <div className={cls.share}>
                        <EventDetailaa />
                        <p className={cls.shareDescription}>поделиться событием</p>
                    </div>
                </div>
                <button className={cls.bookNow}>Забронировать</button>
            </div>

            <div className={cls.EventDCon}>
                <div className={cls.EventDLeft}>
                    <h1 className={cls.titlee}>Начните свое путешествие по тайцзи: введениев основные навыки тайцзи</h1>
                    <h1 className={cls.logo}>Об этом мероприятии</h1>
                    <p className={cls.description}> 
                       <ClampLines
                text={"В преддверии сезона весенней уборки TFD предлагает вам ускоренный курс на полдня, в котором каждый элемент вашей жизни будет организован, упорядочен и свободен от стресса. От вашего дома до гардероба и кухни - вы заслуживаете того, чтобы жить осознанной и продуманной жизнью, избавляясь от беспорядка, который тянет вас вниз.   Наши эксперты, приглашенные ведущими контент-менеджерами TFD, Холли Трантам, креативным директором и Сорайей Джозеф, управляющим редактором, предоставят инструкции и конкретные инструменты для восстановления и создания баланса в вашей домашней и личной жизни при любом бюджете. Сессии будут включать в себя приемы оптимизации покупок продуктов и планирования приема пищи, как создать капсульный гардероб, не тратя тысячи, интегрировать минимализм, даже когда вы не в порядке, и многое другое. <br /> <br />  В качестве бонуса M.M.LaFleur раздаст участникам мероприятия ДВЕ подарочные карты на 500 долларов - все владельцы билетов будут автоматически включены в список победителей. "}
                id="really-unique-id"
                lines={7}
                innerElement="p"    
                buttons={true}
            /></p>

                    <h1 className={cls.logo}>Что дает ваш билет:</h1>
                    <ul className={cls.containerText}>
                        <li className={cls.text}>Доступ ко всему событию (включая запись, доступную для просмотра по вашему усмотрению)</li>

                        <li className={cls.text}>Участие в живых Q s A со всеми нашими талантами Печатная рабочая тетрадь на 30 страниц, основанная на занятиях дня и предоставляющая инструменты для круглогодичной организации.</li>

                        <li className={cls.text}>Примите участие в нашей лотерее, чтобы выиграть одну из ДВУХ подарочных карт на 500 долларов, чтобы начать создавать свой собственный капсульный гардероб, любезно предоставлено M.M.LaFleur</li>

                        <li className={cls.text}>Доступ к ранним ценам и скидкам на предстоящие мероприятияУчастие в живых QA со всеми нашими талантами</li>

                        <li className={cls.text}>Печатная рабочая тетрадь на 30 страниц, основанная на занятиях дня и предоставляющая инструменты для круглогодичной организации.</li>

                        <li className={cls.text}> Примите участие в нашей лотерее, чтобы выиграть одну из ДВУХ подарочных карт на 500 долларов, чтобы начать создавать свой собственный капсульный гардероб, любезно предоставлено M.M.LaFleur</li>

                        <li className={cls.text}>Доступ к ранним ценам и скидкам на предстоящие мероприятия</li>
                    </ul>
                    <div className={cls.imgContainer}>
                        <Image className={cls.CadsImg} src={imgOne} alt="Picture of the author" />
                    </div>
                    <p className={cls.description}>В преддверии сезона весенней уборки TFD предлагает вам ускоренный курс на полдня, в котором каждый элемент вашей жизни будет организован, упорядочен и свободен от стресса. От вашего дома до гардероба и кухни - вы заслуживаете того, чтобы жить осознанной и продуманной жизнью, избавляясь от беспорядка, который тянет вас вниз.Наши <br /> <br />  эксперты, приглашенные ведущими контент-менеджерами TFD, Холли Трантам, креативным директором и Сорайей Джозеф, управляющим редактором, предоставят инструкции и конкретные инструменты для восстановления и создания баланса в вашей домашней и личной жизни при любом бюджете. Сессии будут включать в себя приемы оптимизации покупок продуктов и планирования приема пищи, как создать капсульный гардероб, не тратя тысячи, интегрировать минимализм, даже когда вы не в порядке, и многое другое. <br /> <br />  В качестве бонуса M.M.LaFleur раздаст участникам мероприятия ДВЕ подарочные карты на 500 долларов - все владельцы билетов будут автоматически включены в список победителей.</p>
                </div>

                <div className={cls.dateTimeCard}>
                    <h1 className={cls.titleLeftCards}>Дата и время</h1>
                    <p className={cls.Descriptionn}>Вс, 11 апреля 2021 г., 21:00 -  Пн, 12 апреля 2021 г., 12:30 +05</p>
                    <h1 className={cls.Location}>Местонахождение</h1>
                    <button className={cls.mapBtn}>Открыть Google map</button>
                </div>
            </div>

        </>
    )
}
