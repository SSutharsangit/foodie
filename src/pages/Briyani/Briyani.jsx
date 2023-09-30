import React from 'react';
import "./Briyani.css"
import Menunavbar from '../../components/menunavbar/Menunavbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.jsx/Footer';
import Foodcard from '../../components/foodcard/Foodcard';
const Briyani = () => {
    return (
        <>
        <Header/>
        <Menunavbar/>
      <div className='noodlescontainer'>
          <Foodcard img="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4= " title="Chicken Briyani" price="600"/>
          <Foodcard img="https://media.istockphoto.com/id/469866881/photo/mutton-gosht-biryani.jpg?s=1024x1024&w=is&k=20&c=uT7ZOFmvAOLNxvwnuL9CoAyBuKG5bcmk9aOhX6UCQvk=" title="Beef Briyani" price="700"/>
          <Foodcard img="https://media.istockphoto.com/id/1052349782/photo/delicious-homemade-biryani-with-chicken-onion-lemon-spices-and-cilantro-close-up-horizontal.jpg?s=1024x1024&w=is&k=20&c=_2hSJhtQuaq3WpUqyhZH5dS6lwji7pjrYWmXaqPYLck=" title="Chennai Briyani" price="500"/>
          <Foodcard img="https://media.istockphoto.com/id/1407172002/photo/indian-spicy-mutton-biryani-with-raita-and-gulab-jamun-served-in-a-dish-side-view-on-grey.jpg?s=1024x1024&w=is&k=20&c=B7d8MOYyInzKTFhzXGb2vRc0NA2bKULn55E7GR4quKQ=" title="Keral Briyani " price="400"/>
      </div>
    <Footer/>
      </>
    );
};

export default Briyani;