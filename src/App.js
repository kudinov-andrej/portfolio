import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Information from './Information';
import Skils from './Skils';
import Works from './Works'; 
import Footer from './Footer';
import './App.css';

function App() {

  const cards = [
    { id: 1, link: "https://brainshef.ru/storage/app/uploads/public/59d/7dd/a43/59d7dda437ce2133646520.jpg", name: "JS", discription: "здесь будет описание" },
    { id: 2, link: "https://www.digiseller.ru/preview/1027191/p1_3233025_95c6777e.jpeg", name: "React", discription: "здесь будет описание" },
    { id: 3, link: "https://img3.goodfon.ru/original/2048x1200/0/e7/html5-html-hyper-text-markup.jpg", name: "HTML5", discription: "здесь будет описание" },
    { id: 4, link: "https://luxe-host.ru/wp-content/uploads/d/6/5/d65a08a6beac3d9a1d7a5cfa15513fa5.png", name: "CSS3", discription: "здесь будет описание" },
    { id: 5, link: "https://www.solucionex.com/sites/default/files/posts/imagen/git.jpg", name: "GIT", discription: "здесь будет описание" },
    { id: 6, link: "https://www.digiseller.ru/preview/1027191/p1_3233028_95179117.png", name: "Figma", discription: "здесь будет описание" },
    
  ]


  return (
    <div className="App">
      <Header/>
      <Information/>
      <Skils cards={cards}/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
