import React from 'react'

const Button = ({bgcolor, text, onClick }) => {
  return (
   <button  onClick={onClick} className=' rounded-full text-white px-6 py-2 font-bold' style={{backgroundColor: bgcolor}}>{text}</button>
  )
}

export default Button;
