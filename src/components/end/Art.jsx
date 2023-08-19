import React from 'react'
import Image from 'next/image'

export default function Art({ handleArtNext}) {
  return (
    <div className='flex items-center justify-center h-screen' onClick={handleArtNext}>
      <Image
        src={`/test.webp`}
        alt="Full Screen Image"
        fill
      />
    </div>
  )
}