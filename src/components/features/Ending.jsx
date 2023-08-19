import React, { useState } from 'react'
import Credits from '../end/Credits'
import Art from '../end/Art'

export default function Ending() {
  const [showArt, setShowArt] = useState(true)
  const [showCredit, setShowCredit] = useState(false)
  
  const handleArtNext = () => {
    setShowArt(false)
    setShowCredit(true)
  }
  
  const handleNext = () => {
    setShowArt(false)
    setShowCredit(false)
  }
  return (
    <>
      {showArt && (
        <Art handleArtNext={() => handleArtNext()} />
      )}
      {showCredit && (
        <Credits handleNext={() => handleNext()}/>
      )}
      {!showArt && !showCredit && (
        <div className='flex flex-col items-center justify-center h-screen tracking-widest'>
          <h1 className="text-center text-8xl font-extrabold text-white">The End</h1>
          <h1 className="text-center text-6xl font-extrabold text-white">Thank you for playing</h1>
        </div>
      )}
    </>
  )
}