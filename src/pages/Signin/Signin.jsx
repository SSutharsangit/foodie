import React from 'react';
import "./Signin.css"
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';

const Signin = () => {
    return (
        <div>
            <Header/>
            <div className="signincontainer">
                <div className="title">SIGN IN OR REGISRER</div>
                <div className="divder">
                </div>
                <form action="">
                    <div className="signininput">
                        <label htmlFor="username">Username</label><br />
                        <input type="text" required placeholder='Enter your username....' />
                    </div>
                    <div className="signininput">
                        <label htmlFor="Password">Password</label><br />
                        <input type="password" required placeholder='Enter your password....' />
                    </div>
                    <div className="signininput">
                        <button>Log in with Foodie</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default Signin;