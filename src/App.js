import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import PageWorks from './PageWorks';
import PageHome from './PageHome';
import BallOfFate from './BallOfFate.jsx';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<PageHome />} />
        <Route path="/works" element={<PageWorks />} />
        <Route path="/fate" element={<BallOfFate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;