import React from 'react';
import ServiceCard from './ServiceCard';
import { MdAddLocation } from 'react-icons/md';

const serviceList = [
  {
    title: 'Service 1',
    icon: MdAddLocation, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  {
    title: 'Service 1',
    icon: MdAddLocation, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  {
    title: 'Service 1',
    icon: MdAddLocation, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  {
    title: 'Service 1',
    icon: MdAddLocation, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  {
    title: 'Service 1',
    icon: MdAddLocation, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  {
    title: 'Service 1',
    icon: MdAddLocation, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  {
    title: 'Service 1',
    icon: MdAddLocation, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section id="services" className="p-12 w-screen">
      <div className="text-center">
        <div className="">
          <h1 className="text-7xl font-black">OUR SERVICES</h1>
          <p className="text-lg">A wide range of services that we provide</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2">
          {serviceList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
