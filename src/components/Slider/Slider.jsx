import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Slider.css"

const slideImages = [
    {
        url: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Slide 1'
    },
    {
        url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Slide 2'
    },
    {
        url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        caption: 'Slide 3'
    }
];

const Slider = () => {
    return (
        <div>
          
            <div className="slide-container">
                <Slide images={slideImages.map(slideImage => slideImage.url)}>
                    {slideImages.map((slideImage, index) => (
                        <div key={index} className='slider' style={{ backgroundImage: `url(${slideImage.url})` }}>
                            <div className="slider-content">
                                <p>Foodie</p>
                                <p>Discover culinary delights:<br /> Explore our diverse menu for a mouthwatering experience today!</p>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
};

export default Slider;
