import React from 'react';
import './Works.css';
import WorksItem from './WorksItem';

import { diplomImg, todoImg, peroImg } from "./constant.js"

function Works() {

    const works = [
        {
            id: 1,
            link: diplomImg,
            name: "Movies",
            stack: "Дипломный проект Я.Практикума. Стек технологий: Node.JS, MongoDB, Express, React, HTML, CSS, JS, figma",
            discription: "В проекте реализована регистрация, авторизация, поиск фильмов на странице, возможность добавлять понравившиеся фильмы в избранное. Реализована валидация данных, как на стороне клиента, так и на сервере, установленна базовая защита приложения. Сайт работает, как с внешним открытым API(GET запрос за данными всех фильмов), так и собственным API(регистрация, авторизация, редактирование данных пользователя, сохранение и удаление фильмов). После создания проекта он был размещен на собственном сервере.  Сайт адаптирован для различных устройств", href: "https://diplomak.nomoreparties.sbs/"
        },
        {
            id: 6,
            link: todoImg,
            name: "Task-list",
            stack: "Pet-проект. Стек технологий: React, Js, HTML, CSS",
            discription: " Проект выполнен на React.  В Планере реализована возможность добавлять дела, делать отметки об их выполнении, удалять выполненные или неактуальные задачи, менять цвет темы. А еще приложение показывает время. При каждом изменении списка задач, данные обновляются в локальном хранилище, что позволяет пользоваться проектом без его размещения на сервере", href: "https://kudinov-andrej.github.io/task-list/"
        },
        {
            id: 3,
            link: peroImg,
            name: "Pero-travel",
            stack: "Pet-проект. Стек технологий: HTML, CSS, JS, figma",
            discription: "Pet-проект. Сайт о путешествиях. На сайте реализованы интересная grid галлерея, выполнен кастомный scroll. Планируется добавить 2 страницы, на которых можно будет посмотреть информацию о доступных турах и забронировать путешествие в календаре. Планируется рендерить карточки на сайт через JS, в календарь также будут подгружаться данные из JS", href: "https://kudinov-andrej.github.io/pero_travel/"
        }

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


