import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/logo.png'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-5'>
       <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Job Marshal Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Board</span>
        </h1>
      </Link>


<Button>
    Login
</Button>



    </nav>

    
  )
}

export default Navbar