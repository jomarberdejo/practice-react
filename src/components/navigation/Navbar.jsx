import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-600 h-14 flex justify-end items-center py-2 px-10'>
        <nav className=''>
            <ul className='flex gap-6'>
              

                <li className=' text-white font-medium hover:text-lime-300'>
                    
                <Link to={'/'}> Login </Link>
                </li>

                <li className=' text-white font-medium hover:text-lime-300'>
                    
                    <Link to={'/register'}>Register</Link>
                </li>



            </ul>
        </nav>

    </div>
  )
}

export default Navbar;