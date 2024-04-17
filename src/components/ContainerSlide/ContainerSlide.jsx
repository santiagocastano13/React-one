import React from 'react'
import img1 from '../../assets/noticia-harley.jpg'
export const ContainerSlide = () => {
  return (
    <div className='w-full h-96 p-4 px-0'>
        <img className='w-full h-full object-cover' src={img1}/>
    </div>
  )
}
