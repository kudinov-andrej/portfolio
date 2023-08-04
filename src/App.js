import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import PageWorks from './PageWorks';
import PageHome from './PageHome';

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<PageHome />} />
        <Route path="/works" element={<PageWorks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

