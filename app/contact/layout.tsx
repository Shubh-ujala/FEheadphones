import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
     <div className='w-full h-screen bg-neutral-200 mt-[-80]'>
      {children}
    </div>
  )
}

export default layout
