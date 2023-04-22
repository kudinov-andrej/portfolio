import React from 'react';
import './Works.css';
import WorksItem from './WorksItem';



function Works() {

    const works = [
        { id: 1, link: "./image/mesto.png", name: "Mesto", discription: "Учебный проект. Написан на ванильном JS, для сборки использовался webpack. На сайте реализована возможность добавления/удаления карточек, редактировние профиля, постановки/снятия лайков, всплывающие pop-up, происходит валидация форм перед отправкой на сервер. Сайт работает с API. ", href: "https://kudinov-andrej.github.io/mesto/" },
        { id: 2, link: "./image/ToDO.png", name: "Task-list", discription: "Pet-проект. Написан на React. В проекте применяются хуки UseState, UseEffect, props передаются в дочерние и родительские компоненты. Реализованы добавление/удаление задач, постановка отметки об их выполнении, реализована смена темы с использованием контекста.  ", href: "https://kudinov-andrej.github.io/task-list/"},
        { id: 3, link: "./image/trevel.png", name: "Pero-travel", discription: "Pet-проект. Сайт о путешествиях. На сайте реализованы интересная grid галлерея, выполнен кастомный scroll. Планируется добавить 2 страницы, на которых можно будет посмотреть информацию о доступных турах и забронировать тур в календаре. Планируется рендерить карточки на сайт через JS, в календарь также будут подгружаться данные из JS", href: "https://kudinov-andrej.github.io/pero_travel/" }
               
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


