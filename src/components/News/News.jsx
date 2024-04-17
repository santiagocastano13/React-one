import React from 'react'

export const News = ({ img, title, description, className }) => {
  return (
    
    <div className={className}>
      <img src={img}/>
      <div className="w-full bg-gray-600">
            <h3>{title}</h3>
            <p>{description}</p>
      </div>
    </div>

  )
}
