"use client"
import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id='contact' className='flex flex-col w-screen items-center justify-center bg-gray-200'>
      <form className='bg-white p-8 mt-10 rounded-xl w-1/2 shadow-xl'>
        {/* Name Field */}
        <div className='mb-4'>
          <h1 className='text-4xl'>CONTACT US</h1>
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
          className='w-full bg-black text-white p-2 rounded-md'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <footer className="bg-gray-300 text-gray-500 text-center p-4 mt-10 bottom-0 w-screen">
        Copyright © 2023 ASPC Contractors
      </footer>
    </section>
  );
};

export default ContactUs;
