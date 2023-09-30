import React from 'react';
import "./Today.css"
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Button from '../Button/Button';
import Foodcard from '../foodcard/Foodcard';


const Today = () => {
    return (
        <div>
            <div className="today">
                <div className="todaytop">
                <h2>Today Our Special Items</h2>
            <h6>Get 20% offer!</h6>
                </div>
                <div className="todaybottom">
                <Foodcard img="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Noodles" price="330"/>
                <Foodcard img="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Noodles" price="330"/>
                <Foodcard img="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Noodles" price="330"/>
                </div>
            </div>
           
        </div>
    );
};

export default Today;