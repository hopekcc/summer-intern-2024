import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
        const [nav, setNav] = useState(false)

        const handleNav = () => {
           setNav(!nav)
        }

    return (
        <div className='flex justify-between items-center h-24 man-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-white'>HopeKCC</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Donate</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-600 bg-[#09396e] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-white m-4'>HopeKCC</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-500'>Home</li>
                    <li className='p-4 border-b border-gray-500'>Projects</li>
                    <li className='p-4 border-b border-gray-500'>Resources</li>
                    <li className='p-4 border-b border-gray-500'>About</li>
                    <li className='p-4'>Donate</li> 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
