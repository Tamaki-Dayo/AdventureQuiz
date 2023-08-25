import React from 'react'
import Image from 'next/image'

export default function Art2({handleArtNext}) {
  return (
    <Image
        src={`/birthday-party.png`}
        alt="Full Screen Image"
        fill 
        style={{objectFit: "contain"}}
        onClick={handleArtNext}
    />
  )
}