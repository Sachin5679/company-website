import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { MdAddLocation } from "react-icons/md";

const ServiceCard = () => {
  return (
    <div className="flex flex-col items-center p-8 m-2 border rounded-xl shadow-xl bg-white hover:bg-green-100 transition-all">
      {/* <FontAwesomeIcon icon={faLeaf} className="text-green-500 text-3xl mb-4" /> */}
      <MdAddLocation className='text-5xl' />
      <div className="text-xl font-extrabold mb-2">Service 1</div>
      <p className="text-sm text-gray-600">A brief description of the service.</p>
    </div>
  );
};

export default ServiceCard;
