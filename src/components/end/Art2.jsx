import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Art2({handleArtNext}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => setLoaded(true);

  return (
    <Image
      src={`/birthday-party.png`}
      alt="Full Screen Image"
      fill 
      style={{objectFit: "contain"}}
      onLoadingComplete={() => handleLoaded()}
      onClick={loaded ? handleArtNext : ""}
    />
  );
};