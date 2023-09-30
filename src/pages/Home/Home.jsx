import React from 'react';
import Slider from '../../components/Slider/Slider';
import Header from "../../components/Header/Header"
import Today from '../../components/Today/Today';
import Footer from '../../components/Footer.jsx/Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Today/>
      <Footer/>
    </div>
  );
};

export default Home;