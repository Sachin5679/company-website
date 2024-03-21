"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from 'react-icons/fa';

const Profile = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const updateSliderSettings = () => {
    const isMobile = window.innerWidth <= 768;
    setSliderSettings({
      ...sliderSettings,
      slidesToShow: isMobile ? 1 : 4,
    });
  };

  // Update slider settings on component mount and window resize
  useEffect(() => {
    updateSliderSettings();
    window.addEventListener('resize', updateSliderSettings);
    return () => {
      window.removeEventListener('resize', updateSliderSettings);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle: React.CSSProperties = {
    objectFit: 'cover',
    width: '95%',
    height: '300px',
  };

  return (
    <section id='profile' className="flex flex-col md:h-screen w-screen p-10 bg-red-800">
      <div className='text-center' style={containerStyle}>
        <div className='mb-2 text-white'>
          <h1 className='text-7xl font-black'>PROFILE</h1>
          <p className='text-lg opacity-60'>We possess a vast portfolio of work</p>
        </div>
        {/* <div className='flex m-2'>
          <Link href='/projects' className='flex flex-row items-center bg-black text-white p-4 hover:bg-white hover:text-black hover:shadow-xl hover:rounded-xl transition 1s' passHref>
              <span className='mr-2'>View All</span>
              <FaArrowRight />
          </Link>
        </div> */}
        <div className='w-4/5 justify-center'>
          <Link href='/projects' passHref>
            <Slider {...sliderSettings} className='text-center p-4 hover:opacity-75'>
              <div>
                <img src="image1.png" alt="Image 1" style={imageStyle} />
              </div>
              <div>
                <img src="image2.png" alt="Image 2" style={imageStyle} />
              </div>
              <div>
                <img src="image3.png" alt="Image 3" style={imageStyle} />
              </div>
              <div>
                <img src="image4.png" alt="Image 4" style={imageStyle} />
              </div>
              <div>
                <img src="image5.png" alt="Image 5" style={imageStyle} />
              </div>
            </Slider>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Profile;

