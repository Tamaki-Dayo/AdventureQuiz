import React from 'react'

export default function Button({index, value, onClick, text}) {
  return (
    <button key={index} value={value} onClick={onClick} className='bg-teal-600 hover:bg-teal-800 text-white font-bold py-3 px-4 min-w-500 rounded my-4 mx-auto'>{text}</button>
  )
};