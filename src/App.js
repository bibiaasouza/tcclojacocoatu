import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from 'react';
import Navbar from './Navbar.js'; // Importe o componente Navbar
import Coco from './tela-loja';
import Footer from './rodape';
import Coko from './coco&lola';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Coco />
      <BrowserRouter> 
 <Routes> 
 <Route path='/ss' element={<Coco />} /> 
 <Route path='/Cocoss' element={<Coko />} /> 
 </Routes>
 </BrowserRouter> 
 <Footer/>





        </div>
  );
}

export default App;