import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa';

const page = () => {
  return (
    <div className='p-4'>
      <div className='flex'>
        <h1 className='text-2xl'>Projects by <span className='text-2xl text-red-800 font-black'>ASPC</span></h1>
        <Link href='/' className='flex justify-end bg-black text-white p-4 hover:bg-white hover:text-black hover:shadow-xl hover:rounded-xl transition 1s' passHref>
              <span className='mr-2'>Back to Home</span>
              <FaArrowLeft />
        </Link>
      </div>
      <hr className='mt-2' />

    </div>
  )
}

export default page
