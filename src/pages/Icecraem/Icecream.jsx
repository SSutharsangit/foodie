import React from 'react';
import "./icecream.css"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.jsx/Footer';
import Foodcard from '../../components/foodcard/Foodcard';
import Menunavbar from '../../components/menunavbar/Menunavbar';
const Icecream = () => {
    return (
        
             <>
          <Header/>
  <Menunavbar/>
        <div className='noodlescontainer'>
            <Foodcard img="https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Newyork Icecream" price="800"/>
            <Foodcard img="https://images.pexels.com/photos/1233258/pexels-photo-1233258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Special Icecream" price="700"/>
            <Foodcard img="https://images.pexels.com/photos/2156698/pexels-photo-2156698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Honey Icecream" price="500"/>
            <Foodcard img="https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="CoCo Icecream" price="400"/>
        </div>
   <Footer/>
        </>
     
    );
};

export default Icecream;