import React from 'react';
import { IconType } from 'react-icons';
import { MdAddLocation } from 'react-icons/md';

interface Service {
  title: string;
  icon: IconType; // Use the IconType type from react-icons
  text: string;
}

const ServiceCard = ({ title, icon: IconComponent, text }: Service) => {
  return (
    <div className="flex flex-col items-center p-8 m-2 border rounded-xl shadow-xl bg-white hover:bg-green-100 transition-all">
      <IconComponent className="text-7xl mb-2 text-red-500" />
      <div className="text-2xl font-bold mb-2">{title}</div>
      <p className="text-sm opacity-50">{text}</p>
    </div>
  );
};

export default ServiceCard;
