import React from 'react';
import { IconType } from 'react-icons';
import { MdAddLocation } from 'react-icons/md';

interface Service {
  title: string;
  icon: IconType; 
}

const ServiceCard = ({ title, icon: IconComponent }: Service) => {
  return (
    <div className="flex flex-col items-center p-4 md:m-4 m-3 border rounded-xl shadow-xl bg-white hover:bg-green-100 transition-all">
      <IconComponent className="text-7xl mb-2 text-red-800" />
      <div className="md:text-2xl text-xl font-bold mb-2">{title}</div>
    </div>
  );
};

export default ServiceCard;
