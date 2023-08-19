import React from 'react'

export default function Credits({ handleNext }) {
  return (
    <div className='flex items-center justify-center h-screen tracking-widest' onClick={handleNext}>
      <div className='mt-16'>
        <h1 className="text-center text-8xl font-extrabold text-white mb-16">Credits</h1>
        <div className="grid grid-cols-2 gap-x-20 gap-y-8">
          <h2 className="text-end text-4xl text-gray-300">Chief Producer</h2>
          <p className="text-4xl text-gray-100">Vern Escher</p>
          <h2 className="text-end text-4xl text-gray-300">Art Director</h2>
          <p className="text-4xl text-gray-100">Tempest Sonata</p>
          <h2 className="text-end text-4xl text-gray-300">Lead Developer</h2>
          <p className="text-4xl text-gray-100">Tamaki Dayo</p>
          <h2 className="text-end text-4xl text-gray-300">Specialist Consultant</h2>
          <p className="text-4xl text-gray-100">Metal OverlordX</p>
        </div>
        <h2 className='text-center text-5xl font-extrabold text-white mt-20'>Special Thanks</h2>
        <div className='flex flex-wrap justify-center text-center p-6 mx-auto'>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Fayris</div>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Yuzz</div>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Meyvol</div>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Pikachu</div>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Digital</div>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Neji</div>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Star</div>
          <div className='text-3xl text-gray-100 w-1/4 py-3'>Onyx</div>
        </div>
      </div>
    </div>
  )
}