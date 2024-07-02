import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Import your local images
import img1 from '../../assets/violin-wreath-flowers.jpg';
import img2 from '../../assets/high-angle-shot-guitar-grass.jpg';
import img3 from '../../assets/string-instruments-close-up-musical-concert-generative-ai.jpg';

function HeroSection() {
  const imgStyle = {
    width: '100%',
    height: '600px', // Set a fixed height
    objectFit: 'cover', // Ensures the image covers the entire area
  };

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000} // Time between slides in milliseconds
        transitionTime={500} // Transition time between slides in milliseconds
        stopOnHover={false} // Stop autoplay on hover
        emulateTouch={true} // Enable swipe gestures on touch devices
        dotColor="#000000" // Set dot color to black
      >
        <div>
          <Link to="/allproducts">
            <img src={img1} alt="Image 1" style={imgStyle} />
          </Link>
        </div>
        <div>
          <Link to="/allproducts">
            <img src={img2} alt="Image 2" style={imgStyle} />
          </Link>
        </div>
        <div>
          <Link to="/allproducts">
            <img src={img3} alt="Image 3" style={imgStyle} />
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
