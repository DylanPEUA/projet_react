import React from 'react';
import Realportfolio from '../components/real_portfolio';

function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white">
        <img
          src="/img/banner.jpg"
          alt="Service"
          className="w-auto h-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      <div className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800">Portfolio</h2>
        <p className="mt-2 mb-8 px-2 text-xs">Voici quelques-unes de mes réalisations</p>
        <div className="w-1/4 mx-auto h-1 bg-blue-500 mt-2 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    
          <Realportfolio />

        </div>
      </div>
    </> 
  );   
}

export default Portfolio;