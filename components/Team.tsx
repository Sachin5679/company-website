import React, { useState } from 'react';
import MemberCard from './MemberCard';

const Team = () => {

  return (
    <section id='team' className="h-3/4 w-screen p-12">
        <div className='text-center'>
            <div className=''>
                <h1 className='text-7xl font-black'>OUR TEAM</h1>
                {/* <hr className="w-16 mx-auto border-t-2 border-gray-400 mb-4" /> */}
            </div>
            <div className='flex justify-center items-center'>
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
        </div>

    </section>
  );
};

export default Team;
