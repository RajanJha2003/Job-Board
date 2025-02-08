import Navbar from '@/components/general/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='ml-10 mr-5'>
        <Navbar />
        {children}
    </div>
  )
}

export default layout