import React from 'react'

export const News = ({ img, title, description, className }) => {
  return (
    
    <div className={className}>
      <img className='pb-4 border-b border-white' src={img}/>
      <div className="w-full pt-4 pb-4 text-white text-justify">
            <h2 className='font-bold'>{title}</h2>
            <p>{description}</p>
      </div>
    </div>

  )
}
