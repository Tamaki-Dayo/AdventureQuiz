import React from 'react'

export default function Button({index, value, onClick, text}) {
  return (
    <button key={index} value={value} onClick={onClick} className='bg-teal-600 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded m-4'>{text}</button>
  )
};