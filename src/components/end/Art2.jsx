import React from 'react'
import Image from 'next/image'

export default function Art2({handleArtNext}) {
  return (
    <Image
        src={`/meiya_birthday_party.jpg`}
        alt="Full Screen Image"
        fill 
        style={{objectFit: "contain"}}
        onClick={handleArtNext}
    />
  )
}