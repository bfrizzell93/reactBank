import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import './App.css';
//import { frameLoop } from '@react-spring/shared';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='contact' element={<ContactPage />}/>
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
