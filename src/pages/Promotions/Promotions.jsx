import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.jsx/Footer';
import Foodcard from '../../components/foodcard/Foodcard';
import "./Promotion.css";

const Promotions = () => {
    return (
        <div>
           <Header/>
           <div className="promototioncontainer">
           <Foodcard img='https://images.pexels.com/photos/18332233/pexels-photo-18332233/free-photo-of-coffee-cups-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Tea and Cake" price ="300"/>
           <Foodcard img='https://images.pexels.com/photos/18332233/pexels-photo-18332233/free-photo-of-coffee-cups-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Tea and Cake" price ="300"/>
           <Foodcard img='https://images.pexels.com/photos/18332233/pexels-photo-18332233/free-photo-of-coffee-cups-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Tea and Cake" price ="300"/>
           <Foodcard img='https://images.pexels.com/photos/18332233/pexels-photo-18332233/free-photo-of-coffee-cups-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Tea and Cake" price ="300"/>
           <Foodcard img='https://images.pexels.com/photos/18332233/pexels-photo-18332233/free-photo-of-coffee-cups-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' title="Tea and Cake" price ="300"/>
           </div>
           <Footer/>
        </div>
    );
};

export default Promotions;