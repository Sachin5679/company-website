"use client";
import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id='contact' className='flex flex-col h-screen bg-gray-200'>
      <div className='flex-grow flex'>
        {/* Contact Form - Left Side */}
        <form className='bg-white p-8 w-1/2 shadow-xl'>
          <h1 className='text-4xl mb-6'>CONTACT US</h1>

          {/* Name Field */}
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            />
          </div>

          {/* Email Field */}
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='mobile' className='block text-sm font-medium text-gray-700'>
              Mobile number:
            </label>
            <input
              type='text'
              id='mobile'
              name='mobile'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            />
          </div>

          {/* Message Field */}
          <div className='mb-4'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
              Message:
            </label>
            <textarea
              id='message'
              name='message'
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

        {/* Right Side - Address and Map */}
        <div className='flex flex-col w-1/2'>
          <div className='p-8 h-1/2 bg-gray-100'>
            <h2 className='text-xl font-semibold mb-2'>Contact Information</h2>
            <p>123 Main Street</p>
            <p>City, State ZIP</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Map */}
          <div className='p-4 h-1/2'>
            {/* Add your map component or embed code here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.481043661524!2d55.4004588!3d25.1907331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f672af19bf8a1%3A0x65a97b12152572ca!2sOur%20Own%20High%20School%20Boys%20Al%20Warqa!5e0!3m2!1sen!2sae!4v1703840988023!5m2!1sen!2sae"
              width="100%"
              height="100%"
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-300 text-gray-500 text-center p-4 mt-auto">
        Copyright © 2023 ASPC Contractors
      </footer>
    </section>
  );
};

export default ContactUs;
