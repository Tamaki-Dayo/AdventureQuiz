import React from 'react';
import { MdNavigateNext } from "react-icons/md";

export default function Textbox({description, handleContinue}) {
  return (
    <div className='flex grow mt-auto min-h-[25%]'>
      <div className="bg-gray-800 p-4 rounded-lg m-8 my-8 flex justify-between grow shadow-lg" onClick={handleContinue}>
        <div className="text-white text-xl p-8">{description}</div>
        <MdNavigateNext className="text-white text-4xl mt-auto"/>
      </div>
    </div>
  )
};
