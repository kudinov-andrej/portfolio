import React from 'react';
import './Works.css';
import WorksItem from './WorksItem';
import mestoImg from "./image/mesto.png"
import todoImg from "./image/ToDO.png"
import peroImg from "./image/trevel.png"

function Works() {

    const works = [
        { id: 1, link: mestoImg, name: "Mesto", discription: "Учебный проект. Написан на ванильном JS, для сборки использовался webpack. На сайте реализована возможность добавления/удаления карточек, редактировние профиля, постановки/снятия лайков, всплывающие pop-up, происходит валидация форм перед отправкой на сервер. Сайт работает с API. ", href: "https://kudinov-andrej.github.io/mesto/" },
        { id: 2, link: todoImg, name: "Task-list", discription: "Pet-проект. Написан на React. В проекте применяются хуки UseState, UseEffect, props передаются в дочерние и родительские компоненты. Реализованы добавление/удаление задач, постановка отметки об их выполнении, реализована смена темы с использованием контекста.  ", href: "https://kudinov-andrej.github.io/task-list/"},
        { id: 3, link: peroImg, name: "Pero-travel", discription: "Pet-проект. Сайт о путешествиях. На сайте реализованы интересная grid галлерея, выполнен кастомный scroll. Планируется добавить 2 страницы, на которых можно будет посмотреть информацию о доступных турах и забронировать тур в календаре. Планируется рендерить карточки на сайт через JS, в календарь также будут подгружаться данные из JS", href: "https://kudinov-andrej.github.io/pero_travel/" }
               
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


