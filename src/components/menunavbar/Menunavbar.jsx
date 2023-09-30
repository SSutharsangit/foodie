import React from 'react';
import "./Menunavbar.css";
import { Link } from 'react-router-dom';
const Menunavbar = () => {
    return (
        <div>
            <div className='menu'>
            <div className="menunavbar">
                <Link to="/menu/noodels" className='link'>Noodles</Link>
                <Link to="/menu/friedrice"className='link'>FriedRice</Link>
                <Link to="/menu/briyani"className='link'>Briyani</Link>
                <Link to="/menu/icecream"className='link'>Icecream</Link>
                <Link to="/menu/cake"className='link'>Cake</Link>
            </div>
            <div className="menudivder"> </div>
        </div>
        </div>
    );
};

export default Menunavbar;