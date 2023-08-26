import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Art({handleArtNext}) {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => setLoaded(true);

  return (
    <Image
      src={`/shrine-exterior.png`}
      alt="Full Screen Image"
      fill 
      style={{objectFit: "contain"}}
      onLoadingComplete={() => handleLoaded()}
      onClick={loaded ? handleArtNext : ""}
    />
  );
};