import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section id='services' className="p-12 w-screen">
        <div className='text-center'>
        <div className=''>
            <h1 className='text-7xl font-black'>OUR SERVICES</h1>
            {/* <hr className="w-16 mx-auto border-t-2 border-gray-400 mb-4" /> */}
            <p className='text-sm'>A wide range of services that we provide</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
        </div>

    </section>
  )
}

export default Services
