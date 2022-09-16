<<<<<<< HEAD
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

import "./App.css";
import AboutPage from "./pages/AboutPage";
=======
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import './App.css';
>>>>>>> c4f8580a14bb4134fcfa7bb55e52104eb0f0d0b8
//import { frameLoop } from '@react-spring/shared';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="About" element={<AboutPage />} />
      </Routes>
=======
        <Route path='/' element={<HomePage />}/>
        <Route path='contact' element={<ContactPage />}/>
      </Routes> 
>>>>>>> c4f8580a14bb4134fcfa7bb55e52104eb0f0d0b8
      <Footer />
    </div>
  );
}

export default App;
