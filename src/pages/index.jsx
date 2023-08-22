import React, { useState } from 'react'
import Adventure from '@/components/features/Adventure';

export default function Home() {

  const [name, setName] = useState('');
  const [showAdventure, setShowAdventure] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const start = () => {
    setShowAdventure(true)
  }

  return (
    <div className='h-screen'>
      {showAdventure ? <Adventure name={name} /> : (
        <div className="flex h-screen items-center justify-center">
          <div className="absolute inset-0 bg-[url('/test.png')] opacity-75 "></div>
          <div className="relative">
            <p className="text-center text-2xl font-extrabold text-white">You open your eyes... Before you is a forest, behind you a white expanse. Something calls you into that forest but you don't remember anything except your name.</p>
            <div className='flex justify-center items-center h-full'>
              <div className='p-8 '>
                <input
                  type="text"
                  className="block border border-gray-300 px-3 py-2 rounded w-full mb-4 focus:outline-none"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                />
                <button
                  className="bg-blue-500 text-white py-2 rounded disabled:opacity-25 w-full"
                  onClick={start}
                  disabled={!name}
                >
                  Move Forward
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    {/* <Adventure /> */}
    </div>
  );
}