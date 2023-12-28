"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from 'react-icons/fa';

const Profile = () => {
  const [sliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle: React.CSSProperties = {
    objectFit: 'cover',
    width: '90%', // Ensures the image takes up the full width of its container
    height: '300px',
  };

  return (
    <section id='profile' className="flex flex-col h-screen w-screen p-12 bg-gray-300">
      <div className='text-center' style={containerStyle}>
        <div className='mb-6'>
          <h1 className='text-7xl font-black'>PROFILE</h1>
          <p className='text-lg'>We possess a vast portfolio of work</p>
        </div>
        <div className='w-4/5 justify-center bg-gray-100 shadow-xl rounded-xl'>
          <Slider {...sliderSettings} className='text-center p-5'>
            <div>
              <img src="image1.jpeg" alt="Image 1" style={imageStyle} />
            </div>
            <div>
              <img src="image2.jpeg" alt="Image 2" style={imageStyle} />
            </div>
            <div>
              <img src="image3.jpeg" alt="Image 3" style={imageStyle} />
            </div>
            <div>
              <img src="image4.jpeg" alt="Image 4" style={imageStyle} />
            </div>
            <div>
              <img src="image5.jpeg" alt="Image 5" style={imageStyle} />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
        <div className='flex m-8'>
          <button className='flex flex-row items-center bg-black text-white p-4 hover:bg-white hover:text-black hover:shadow-xl hover:rounded-xl transition 1s'>
            <span className='mr-2'>View All</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
