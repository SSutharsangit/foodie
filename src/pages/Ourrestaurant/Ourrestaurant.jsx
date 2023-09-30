import React from 'react';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer.jsx/Footer';
const Ourrestaurant = () => {
    return (
        <>
        <Header/>
         <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          src="https://maps.google.com/maps?width=600&amp;height=600&amp;hl=en&amp;q=srilanka colomob&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://connectionsgame.org/">Connections Unlimited</a>
      </div>
      <style>
        {`.mapouter{position:relative;text-align:right;width:600px;height:600px;}.gmap_canvas {overflow:hidden;background:none!important;width:1354px;height:1571px;}.gmap_iframe {width:1354px!important;height:1571px!important;}`}
      </style>
    </div>
    
        </>
          
    );
};

export default Ourrestaurant;