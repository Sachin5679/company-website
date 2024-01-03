"use client";
import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id='contact' className='flex flex-col h-screen w-screen bg-gray-200'>
      <div className='flex-grow flex'>
        {/* Contact Form - Left Side */}
        <form className='p-8 w-1/2 shadow-xl bg-gray-100'>
          <h1 className='text-4xl text-gray-800 font-bold'>CONTACT US</h1>
          <p className='mb-6 text-gray-500'>Want to let us know something?</p>
          {/* Name Field */}
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-600'>
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
            <label htmlFor='email' className='block text-sm font-medium text-gray-600'>
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
            <label htmlFor='mobile' className='block text-sm font-medium text-gray-600'>
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
            <label htmlFor='message' className='block text-sm font-medium text-gray-600'>
              Message:
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition-all 3s'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>


        {/* Right Side - Address and Map */}
        <div className='flex flex-col w-1/2'>
          <div className='p-8 h-1/2 bg-red-800 text-white'>
            <h2 className='text-xl font-semibold mb-2'>Contact Information</h2>
            <p>79M2+7J9 - شارع </p>
            <p>Al Waheda - Dubai</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Map */}
          <div className='p-4 h-1/2 bg-red-800'>
            {/* Add your map component or embed code here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14430.504772848097!2d55.3516142!3d25.2831572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8e90d8d5cd%3A0x38eaa6fca0306eda!2sArabilla%20Building!5e0!3m2!1sen!2sae!4v1703939653579!5m2!1sen!2sae"
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
