import React from 'react';
import ServiceCard from './ServiceCard';
import { MdAddLocation, MdEngineering, MdPlumbing } from 'react-icons/md';
import { FaFireExtinguisher, FaLightbulb, FaToolbox, FaTools } from "react-icons/fa";
import { FiWind } from "react-icons/fi";

const serviceList = [
  {
    title: 'Fire System',
    icon: FaFireExtinguisher, // Use the React icon component here
    text: 'We proof ourselves in the Competitive market with our safety induced Fire fighting system Supply , Installation & Maintenance',
  },
  {
    title: 'Maintenance',
    icon: FaToolbox, // Use the React icon component here
    text: 'A brief description of the service.',
  },
  {
    title: 'Plumbing services',
    icon: MdPlumbing, // Use the React icon component here
    text: 'We proof ourselves in the Competitive market with our self-made expertise on the Supply, installation all types of plumbing, drainage and sanitary fixing works.',
  },
  {
    title: 'Electrical services',
    icon: FaLightbulb, // Use the React icon component here
    text: 'We Masteries the Competitive market with our miraculous expertise on the Supply, installation of electrical systems',
  },
  {
    title: 'AC works',
    icon: FiWind, // Use the React icon component here
    text: 'We define perfection & Professionalism on our experience in the A/C Supply & Installation with accessories',
  },
  {
    title: 'Civil works',
    icon: MdEngineering, // Use the React icon component here
    text: 'We proof ourselves in the Competitive market with our expertise way on the Supply, installation all types of Civil works.',
  },
  // Add more services as needed
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
