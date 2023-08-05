import React from 'react';
import { MdNavigateNext } from "react-icons/md";

export default function Textbox() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg m-8 mb-8 min-h-[25%] ">
        <div className="text-white text-xl p-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, enim voluptas? Aut et, ipsam fugiat nostrum vero quasi non, dolorum fuga adipisci voluptate accusamus, labore qui officia impedit a possimus.</div>
        <MdNavigateNext className="text-white absolute " />
    </div>
  )
};
