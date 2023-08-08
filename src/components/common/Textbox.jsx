import React from 'react';
import { MdNavigateNext } from "react-icons/md";

export default function Textbox({description, handleContinue}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg m-8 my-8 min-h-[25%] min-w-[100%] flex justify-between shadow-lg" onClick={handleContinue}>
        <div className="text-white text-xl p-8">{description}</div>
        <MdNavigateNext className="text-white text-9xl my-auto"/>
    </div>
  )
};
