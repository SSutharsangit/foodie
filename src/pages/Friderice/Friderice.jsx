import React from 'react';
import "./Friderice.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.jsx/Footer';
import Foodcard from '../../components/foodcard/Foodcard';
import Menunavbar from '../../components/menunavbar/Menunavbar';
const Friderice = () => {
    return (
        
             <>
          <Header/>
       <Menunavbar/>
       
        <div className='noodlescontainer'>
            <Foodcard img="https://images.pexels.com/photos/6937455/pexels-photo-6937455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " title="Vegetable friedrice" price="600"/>
            <Foodcard img="https://images.pexels.com/photos/3926133/pexels-photo-3926133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="chicken friedrice" price="700"/>
            <Foodcard img="https://images.pexels.com/photos/4940832/pexels-photo-4940832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Beef Friedrice" price="500"/>
            <Foodcard img="https://images.pexels.com/photos/4372144/pexels-photo-4372144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Mix Friedrice" price="400"/>
        </div>
   <Footer/>
        </>
       
    );
};

export default Friderice;

