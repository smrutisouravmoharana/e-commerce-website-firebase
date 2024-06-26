import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePhone, MdOutlineMailOutline, MdOutlineFax, MdOutlineAddLocation } from "react-icons/md";
import img1 from "../../assets/acoustic-guitar-snare-drum-black-background-isolated.jpg";



const ContactUs = () => {
  const posts = [
    {
      id: 1,
      title: 'Our Main Office',
      icon: <MdOutlineAddLocation size={30} className="text-orange-600" />,
      description: 'SoHo 94 Broadway St New York, NY 1001',
    },
    {
      id: 2,
      title: 'Phone Number',
      icon: <MdOutlinePhone size={30} className="text-orange-600" />,
      description: '234-9876-5400 888-0123-4567 (Toll Free)',
    },
    {
      id: 3,
      title: 'Fax',
      icon: <MdOutlineFax size={30} className="text-orange-600" />,
      description: '1-234-567-8900',
    },
    {
      id: 4,
      title: 'Email',
      icon: <MdOutlineMailOutline size={30} className="text-orange-600" />,
      description: 'hello@theme.com',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="flex-grow bg-cover bg-center py-24 sm:py-32"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Get in touch with us now.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col items-center p-6 rounded-lg shadow-lg"
                style={{ backgroundColor: '#acaef5' }}
              >
                <div className="text-5xl mb-4 text-white">{post.icon}</div>
                <h3 className="text-lg font-bold text-white">{post.title}</h3>
                <p className="mt-2 text-sm text-white">{post.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-10 flex-wrap mt-10 p-10 rounded-lg shadow-lg">
            <form
              action=""
              method="post"
              className="flex flex-col justify-start w-full lg:w-2/5 order-0 lg:order-0 lg:mr-44"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="w-full h-12 px-0 mb-4 rounded bg-transparent border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                style={{ caretColor: 'white', color: 'white', WebkitTextFillColor: 'white' }} />
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="w-full h-12 px-0 mb-4 rounded bg-transparent border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                style={{ caretColor: 'white', color: 'white', WebkitTextFillColor: 'white' }}
              />

              <input
                type="tel"
                name="number"
                placeholder="Enter Your Number"
                className="w-full h-12 px-0 mb-4 rounded bg-transparent border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                style={{ caretColor: 'white', color: 'white', WebkitTextFillColor: 'white' }} />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full h-32 px-0 mb-4 rounded bg-transparent border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{ caretColor: 'white', color: 'white', WebkitTextFillColor: 'white' }}
              />
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600"
                disabled
              >
                Submit
              </button>
            </form>
            <div className="w-full lg:w-2/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4764739737107!2d93.933285474428!3d24.81337414714178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927b1c771e2d3%3A0xd43b7c8901a240f6!2sZound&#39;s%20Musik%20Nagamapal!5e0!3m2!1sen!2sin!4v1719764330580!5m2!1sen!2sin"
                className="w-full h-72 lg:h-96 border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                style={{ minHeight: '300px' }} // Optional: Set a minimum height to ensure visibility
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
