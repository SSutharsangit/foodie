import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Cart.css";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.jsx/Footer';

const Cart = () => {
    const [cartitems,Setcartitems]=useState([])
    return (
        <div>
            <Header/>
            <div className="cartcontainer">
                <div className="cartleft">
                    <div className="title">Your Cart</div>
                    <div className="diveder"></div>
                    <div className="content">
                    {cartitems.length === 0 && <p>No Items in your cart. <br/> Your cart looks litttle empty.Why not checkout some of our unbeatable deals.</p>}
                    {cartitems.length !== 0 && <Cartlist/>}
                    </div>

                   <Link to="/" className='backbtn'><button><ArrowBackIcon/>Back</button></Link>
                    
                </div>
                <div className="cartright">
                    <div className="title">Order <br/> Summary</div>
                    <div className="diveder"></div>
                    <div className="condition">
                        Minimum order <br/>value should be <br/>Rs. 500
                    </div>
                   
                    <div className="amountcontainer">
                        <div className="amounttitle">Sub Total</div>
                        <div className="amount">00</div>
                    </div>
                    <div className="diveder"></div>
                    <div className="amountcontainer">
                        <div className="amounttitle">Discount Amount</div>
                        <div className="amount">00</div>
                    </div>
                    <div className="diveder"></div>
                    <div className="amountcontainer">
                        <div className="amounttitle">Discounted Total</div>
                        <div className="amount">00</div>
                    </div>
                    <div className="diveder"></div>
                    <div className="nettotal">
                        <div className="netamounttitle">Net Total</div>
                        <div className="amount">RS. .00</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;