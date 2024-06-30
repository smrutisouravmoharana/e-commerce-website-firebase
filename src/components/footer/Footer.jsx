/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { Link } from 'react-router-dom';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;

  const footerStyles = {
    backgroundImage: `url('https://img.freepik.com/free-photo/music-background-with-guitar-headphones-notepad-top-view_169016-23668.jpg?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_user')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
    color: mode === 'dark' ? 'white' : '',
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <footer className="text-white body-font" style={footerStyles}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>Home</Link>
                </li>
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>Order</Link>
                </li>
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>Local For Vocal</Link>
                </li>
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>Cart</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>Return Policy</Link>
                </li>
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>About</Link>
                </li>
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>Contact Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={'/'} className="text-white font-bold hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }} onClick={scrollToTop}>Privacy</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div>
          </div>
        </div>

        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <Link to={'/'} className='flex' onClick={scrollToTop}>
            <div className="flex">
              <h1 className='text-2xl font-bold text-black px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '' }}>Zound's Music</h1>
            </div>
          </Link>
          <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2024 Zound's Music —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.zoundsmusic.com</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500 ml-3" href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.freepik.com/256/2504/2504903.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid" alt="Facebook" className="w-8 h-8" />
            </a>
            <a className="text-gray-500 ml-3" href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.freepik.com/256/12107/12107611.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid" alt="Facebook" className="w-8 h-8" />
            </a>
            <a className="text-gray-500 ml-3" href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.freepik.com/256/2111/2111463.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid" alt="Facebook" className="w-8 h-8" />
            </a>
            <a className="text-gray-500 ml-3" href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.freepik.com/256/3536/3536445.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid" alt="Facebook" className="w-8 h-8" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
