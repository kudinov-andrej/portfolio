import React from 'react';
import './Works.css';
import WorksItem from './WorksItem';

import { mestoImg, todoImg, peroImg } from "./constant.js"

function Works() {

    const works = [
        { id: 1, link: mestoImg, name: "Mesto", stack: "Учебный проект. Стек технологий: JS, CSS, HTML, webpack", discription: "Сайт о путешествиях, где пользователи могут выкладывать фотографии, которые им дороги. Проект написан на JS, собран webpack. Все данные при открытии страницы загружаются с сервера. На сайте реализована возможность добавлять карточки с фотографиями и их описанием, редактировать свой профиль, а так же удалять свои карточки и ставить понравившимся изображениям лайки", href: "https://kudinov-andrej.github.io/mesto/" },
        { id: 2, link: todoImg, name: "Task-list", stack: "Pet-проект. Стек технологий: React, Js, HTML, CSS", discription: " Проект выполнен на React. Сложно найти хороший Task-list, поэтому я сделал свой. В Планере реализована возможность добавлять дела, делать отметки об их выполнении, удалять выполненные или неактуальные задачи, менять цвет темы. А еще, что для меня важно, приложение показывает время. В планах, разместить сайт на сервере, чтобы можно было получать и обновлять данные", href: "https://kudinov-andrej.github.io/task-list/" },
        { id: 3, link: peroImg, name: "Pero-travel", stack: "Pet-проект. Стек технологий: HTML, CSS, JS, figma", discription: "Pet-проект. Сайт о путешествиях. На сайте реализованы интересная grid галлерея, выполнен кастомный scroll. Планируется добавить 2 страницы, на которых можно будет посмотреть информацию о доступных турах и забронировать путешествие в календаре. Планируется рендерить карточки на сайт через JS, в календарь также будут подгружаться данные из JS", href: "https://kudinov-andrej.github.io/pero_travel/" }

    ]

    return (
        <section className="works">
            <h2 className="works__title">Последние работы</h2>
            <div className='works__block'>
                {works.map((work) =>
                    <WorksItem
                        work={work}
                        key={work.id}
                    />)}
            </div>
        </section>
    );
}

export default Works;


