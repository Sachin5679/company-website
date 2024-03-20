import React from 'react';
import ServiceCard from './ServiceCard';
import { MdEngineering, MdPlumbing } from 'react-icons/md';
import { FaFireExtinguisher, FaLightbulb, FaToolbox, FaTools } from "react-icons/fa";
import { FiWind } from "react-icons/fi";

const serviceList = [
  {
    title: 'Fire System',
    icon: FaFireExtinguisher, 
  },
  {
    title: 'Maintenance',
    icon: FaToolbox, 
  },
  {
    title: 'Plumbing services',
    icon: MdPlumbing, 
  },
  {
    title: 'Electrical services',
    icon: FaLightbulb, 
  },
  {
    title: 'AC works',
    icon: FiWind,
  },
  {
    title: 'Civil works',
    icon: MdEngineering,
  },
];

const Services = () => {
  return (
    <section id="services" className="p-12 w-screen">
      <div className="text-center">
        <div className="">
          <h1 className="text-7xl font-black">OUR SERVICES</h1>
          <p className="text-xl">A wide range of services that we provide</p>
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
