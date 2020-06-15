import React from 'react'
import "../CarouselQuotes/CarouselQuotes.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function CarouselQuotes() {

    

    return (
        <div className="carousel-container">
            <div className="container">

            
            <Carousel showThumbs={false} 
                autoPlay infiniteLoop interval ={3000}
                stopOnHover = {false}
                className="testimonials"
                useKeyboardArrows showStatus = {false}

            >
                <div className='carousel-item'>
                    <blockquote className="quote">“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst”</blockquote>
                    <span className="author">Travis Scott</span>
                </div>
                <div className='carousel-item'>
                        <p className="quote">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.So throw off the bowlines.”</p>
                    <span className="author">Kanye West</span>
                </div >
                <div className='carousel-item'>
                    <p className="quote">“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor.”</p>
                    <span className="author">Kendrick Lamar</span>
                </div>
            </Carousel>
            </div>
        </div>
    )
}
export default CarouselQuotes;

