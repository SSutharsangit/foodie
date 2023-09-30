import React from 'react';
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <div className='footer'>
            <div className="top1">
                <div className="left1"><p>Foodie</p></div>
                <div className="center1"></div>
                <div className="right1">
                    <a href="">< TwitterIcon /></a>
                    <a href="">< InstagramIcon /></a>
                    <a href="">< FacebookIcon /></a>
                    <a href="https://www.youtube.com/">< YouTubeIcon /></a>

                </div>
            </div>
            <div className="center11">
                <div className="about">
                <h3>ABOUT</h3>
                <p>About</p>
                <p>Feedback</p>
                <p>Contact Us</p>
                </div>
                <div className="order">
                <h3>ORDER NOW</h3>
                <p>Mains</p>
                <p>Meals & Beverage</p>
                <p>Promotions</p>
                </div>
                <div className="policy">
                <h3>POLICY</h3>
                <p>Terams & Consditions</p>
                <p>Privacy Policy</p>
                </div>
               
            </div>
            <div className="bottom1">
            <p>&copy;{currentYear} Foodie Srilanka. All Rights Reserved.</p>
            </div>
        </div>
       
    );
};

export default Footer;