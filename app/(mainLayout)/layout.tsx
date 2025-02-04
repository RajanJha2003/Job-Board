import Navbar from '@/components/general/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='mx-3'>
        <Navbar />
        {children}
    </div>
  )
}

export default layout