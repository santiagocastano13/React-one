import React from 'react'

export const Section = ({ children }) => {
  return (
    <div className='w-2/5 h-2/4 flex justify-center bg-slate-200'>
      {children}
    </div>
  )
}
