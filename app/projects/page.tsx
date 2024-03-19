"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { createClient } from '@sanity/client';
import { MdLocationOn } from "react-icons/md"

const client = createClient({
  projectId: 'cun1v7ir',
  dataset: 'production',
  apiVersion: '2023-05-03', // or the latest version
  useCdn: true, // Set to true for production
});

const Page = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6); // Number of projects per page

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "project"]{"image": image.asset->url, title, location, type}`
        );
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  // Logic for displaying projects on the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl mb-4 md:mb-0'>
          Projects by <span className='text-2xl text-red-800 font-black'>ASPC</span>
        </h1>
        <Link href='/' passHref>
          <div className='flex items-center bg-black text-white py-2 px-4 rounded-xl hover:bg-red-800 hover:text-white transition duration-300'>
            <FaArrowLeft className='mr-2' />
            Back to Home
          </div>
        </Link>

      </div>
      <hr className='mt-2' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {currentProjects.map((project, index) => (
          <div key={index} className="border p-4">
            <img src={project.image} alt={project.title} className="w-full h-3/4" />
            <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            <h3 className="text-gray-600">{project.type}</h3>
            <p className="flex text-gray-600"><MdLocationOn className='mt-1 mr-2 text-red-800' />{project.location}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`mr-2 px-3 py-1 rounded ${
              number === currentPage ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;

