
import React from 'react';
import './Works.css';
import WorksItem from './WorksItem';
import { mestoImg, todoImg, peroImg, eventImg, russianImg, artImg } from "./constant.js"

function PageWorks(props) {

  const works = [
    { id: 1, link: eventImg, name: "Event", stack: "Pet-проект. Стек технологий: HTML, CSS, JS, figma", discription: "Это лендинг сайта, предназначенного для бронирования билетов на концерт. Я взял в работу этот проект, посчитав интересным его дизайн. Сайт кроссбраузерный и адаптивный. В мобильной версии реализовано модальное окно, появляющееся при открытии меню. При создании сайта активно использовались технологии Greed и Flex.", href: "https://kudinov-andrej.github.io/magic/" },
    { id: 2, link: artImg, name: "Art", stack: "Pet-проект. Стек технологий: HTML, CSS, JS, figma", discription: "Одностраничный сайт-визитка. Кроссбраузерный и адаптивный. Локаничный дизайн позволяет сосредоточиться на предлагаемом товаре. На JS реализована валидация формы и модальные окна в блоке 'Программа курса'", href: "https://kudinov-andrej.github.io/art/" },
    { id: 3, link: mestoImg, name: "Mesto", stack: "Учебный проект. Стек технологий: JS, CSS, HTML, webpack", discription: "Сайт о путешествиях, где пользователи могут выкладывать фотографии, которые им дороги. Проект написан на JS, собран webpack. Все данные при открытии страницы загружаются с сервера. На сайте реализована возможность добавлять карточки с фотографиями и их описанием, редактировать свой профиль, а так же удалять свои карточки и ставить понравившимся изображениям лайки", href: "https://kudinov-andrej.github.io/mesto/" },
    { id: 4, link: russianImg, name: "Путешествие по России", stack: "Учебный проект. Стек технологий: HTML, CSS, figma", discription: "Один из первых учебных проектов. Его цель - научить строить адаптивные сайты, отработать построение gred сеток. Несмотря на свою простоту, проект получился достаточно интересным и информативным за счет внешних ссылок.", href: "https://kudinov-andrej.github.io/russian-travel/" },
    { id: 5, link: todoImg, name: "Task-list", stack: "Pet-проект. Стек технологий: React, Js, HTML, CSS", discription: " Проект выполнен на React. Сложно найти хороший Task-list, поэтому я сделал свой. В Планере реализована возможность добавлять дела, делать отметки об их выполнении, удалять выполненные или неактуальные задачи, менять цвет темы. А еще, что для меня важно, приложение показывает время. В планах, разместить сайт на сервере, чтобы можно было получать и обновлять данные", href: "https://kudinov-andrej.github.io/task-list/" },
    { id: 6, link: peroImg, name: "Pero-travel", stack: "Pet-проект. Стек технологий: HTML, CSS, JS, figma", discription: "Pet-проект. Сайт о путешествиях. На сайте реализованы интересная grid галлерея, выполнен кастомный scroll. Планируется добавить 2 страницы, на которых можно будет посмотреть информацию о доступных турах и забронировать путешествие в календаре. Планируется рендерить карточки на сайт через JS, в календарь также будут подгружаться данные из JS", href: "https://kudinov-andrej.github.io/pero_travel/" },
  
  ]



    return (
        <section className="works">
          <h2 className="works__title works__title_type_page">Мои работы</h2>
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
    
    export default PageWorks;
