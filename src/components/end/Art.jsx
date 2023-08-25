import React from 'react'
import Image from 'next/image'

export default function Art({handleArtNext}) {
  return (
    <Image
      src={`/shrine-exterior.png`}
      alt="Full Screen Image"
      fill 
      style={{objectFit: "contain"}}
      onClick={handleArtNext}
    />
  )
}