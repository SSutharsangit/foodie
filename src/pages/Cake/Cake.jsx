import React from 'react';
import "./Cake.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.jsx/Footer';
import Foodcard from '../../components/foodcard/Foodcard';
import Menunavbar from '../../components/menunavbar/Menunavbar';
const Cake = () => {
    return (
       
       <>
    <Header/>
  <Menunavbar/>
  <div className='noodlescontainer'>
      <Foodcard img="https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 " title="Birthday cake" price="600"/>
      <Foodcard img="https://images.pexels.com/photos/3923555/pexels-photo-3923555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Weeding cake" price="700"/>
      <Foodcard img="https://images.pexels.com/photos/6133303/pexels-photo-6133303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Choclate cake" price="500"/>
      <Foodcard img="https://images.pexels.com/photos/5426071/pexels-photo-5426071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Stowbary Cake " price="400"/>
  </div>
<Footer/>
  </>
 
    );
};

export default Cake;