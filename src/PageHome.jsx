import React from 'react';
import Information from './Information';
import Skils from './Skils';
import Works from './Works';
import {
  html5Img, figmaImg, jsImgImg,
  nodeImg, webpackImg, css3Img,
  reactImg, mongoImg
} from './constant.js';

function PageHome(props) {

  const cards = [
    { id: 1, link: jsImgImg, name: "JS", discription: "здесь будет описание" },
    { id: 2, link: nodeImg, name: "Node", discription: "здесь будет описание" },
    { id: 3, link: html5Img, name: "HTML5", discription: "здесь будет описание" },
    { id: 4, link: figmaImg, name: "Figma", discription: "здесь будет описание" },
    { id: 5, link: webpackImg, name: "Webpack", discription: "здесь будет описание" },
    { id: 6, link: css3Img, name: "CSS 3", discription: "здесь будет описание" },
    { id: 7, link: reactImg, name: "React", discription: "здесь будет описание" },
    { id: 7, link: mongoImg, name: "MongoDB", discription: "здесь будет описание" },
  ]

  return (
    <>
      <Information />
      <Skils cards={cards} />
      <Works />
    </>
  );
}

export default PageHome;
