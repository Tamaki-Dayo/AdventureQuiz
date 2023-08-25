import React, { useState } from 'react'
import Credits from '../end/Credits'
import Art from '../end/Art'
import Art2 from '../end/Art2'

export default function Ending({playerName}) {
  const [showArt, setShowArt] = useState(true)
  const [showArt2, setShowArt2] = useState(false)
  const [showCredit, setShowCredit] = useState(false)
  
  const handleArtNext = () => {
    setShowArt(false)
    setShowArt2(true)
  }

  const handleArtNext2 = () => {
    setShowArt2(false)
    setShowCredit(true)
  }
  
  const handleNext = () => {
    setShowArt(false)
    setShowArt2(false)
    setShowCredit(false)
  }

  return (
    <>
      {showArt && (
        <>
          <Art handleArtNext={() => handleArtNext()}/>
        </>
      )}
      {showArt2 && (
        <>
          <Art2 handleArtNext={() => handleArtNext2()}/>
        </>
      )}
      {showCredit && (
        <Credits handleNext={() => handleNext()}/>
      )}
      {!showArt && !showArt2 && !showCredit && (
        <div className='flex flex-col items-center justify-center h-screen tracking-widest relative'>
          <h1 className="text-center text-8xl font-extrabold text-white">The End</h1>
          <h1 className="text-center text-6xl font-extrabold text-white mt-4">Thank you for playing {playerName}</h1>
        </div>
      )}
    </>
  )
}