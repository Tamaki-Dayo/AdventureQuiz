import React from 'react'
import Image from 'next/image'

export default function Art({handleArtNext}) {
  return (
    <Image
      src={`/Shrine_Exterior.jpg`}
      alt="Full Screen Image"
      fill 
      style={{objectFit: "contain"}}
      onClick={handleArtNext}
    />
  )
}