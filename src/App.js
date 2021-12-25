import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/NavBar';
import Hero from './Component/Hero';
import Clothes from './Component/Clothes';

const App = () => {
  return (
    <>
      <NavBar />       
      <Hero /> 
      <Clothes />
    </>
  )
}

export default App
