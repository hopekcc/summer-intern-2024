import React from 'react'
import {
    FaFacebookSquare,
    FaYoutube,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                        <h1 className='w-full text-3xl font-bold text-white'>HopeKCC</h1>
                        <p className='py-4'>Copyright © 2024 HopeKCC – All Rights Reserved Hopekcc Inc. I EIN: 93-4559828</p>
                        <div className='flex md:w-75%] my-6'>
                            <FaFacebookSquare />
                            <FaInstagram />
                            <FaLinkedin />
                            <FaYoutube />
                        </div>
        </div>
    );
};

export default Footer;