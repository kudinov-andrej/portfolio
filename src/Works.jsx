import React from 'react';
import './Works.css';
import WorksItem from './WorksItem';



function Works() {

    const works = [
        { id: 1, link: "./image/mesto.png", name: "JS", discription: "здесь будет описание" },
        { id: 2, link: "./image/event.png", name: "React", discription: "здесь будет описание" },
        { id: 3, link: "./image/art.png", name: "HTML5", discription: "здесь будет описание" },
        { id: 4, link: "./image/ToDO.png", name: "CSS3", discription: "здесь будет описание" },
        { id: 5, link: "./image/trevel.png", name: "GIT", discription: "здесь будет описание" },
        { id: 6, link: "./image/russian.png", name: "Figma", discription: "здесь будет описание" },
        
      ]

    return (
        <section className="works">
            <h2 className="works__title">Мои работы</h2>
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


