import React from 'react';
import "./Noodles.css"
import Foodcard from '../../components/foodcard/Foodcard';

import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer.jsx/Footer';
import Menunavbar from '../../components/menunavbar/Menunavbar';

const Noodels = () => {
    return (
        <>
          <Header/>
          <Menunavbar/>
       
        <div className='noodlescontainer'>
            <Foodcard img="https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Vegetabale Nooldes" price="200"/>
            <Foodcard img="https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Brawn Nooldes" price="300"/>
            <Foodcard img="https://images.pexels.com/photos/1359310/pexels-photo-1359310.jpeg" title="Egg Noodles" price="250"/>
            <Foodcard img="https://images.pexels.com/photos/4518703/pexels-photo-4518703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Chines Nooldes" price="400"/>
        </div>
   <Footer/>
        </>
    )  
};

export default Noodels;