import React from 'react';
import "./Header.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
const Header = () => {
    const iconStyle = {
        color: 'white',
        fontSize: '24px', 
    };
   
    return (
        <div>
            <div className="header">
                <Link to="/"style={{ textDecoration: 'none' }} ><div className="left">Foodie</div></Link>
                <div className="center">
                    <ul>
                        <li><Link to="/" className='Link'>Home</Link></li>
                        <li><Link to="/menu/noodles" className='Link'>Menu</Link></li>
                        <li><Link to="/promotions" className='Link'>Promotions</Link></li>
                        <li><Link to="/ourrestaurant" className='Link'>Our Restaurants</Link></li>
                    </ul>

                </div>
                <div className="right">
                    <div className="signinregisbtn">
                        <Link to="/sigin"><Button name="Sig In" /></Link>
                        <Link to="/register"><Button name="Register" /></Link>
                    </div>
                    <div className="basketbtn">
                        <Link to="/cart" className='Link'>< ShoppingCartOutlinedIcon style={iconStyle} /></Link>
                            <div className="basketcount">0</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;