import React from 'react'
import { ReactTyped } from "react-typed";



const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-blue-600 p-1'></p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-5'>HopeKCC</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                        Learn to code in
                    </p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['HTML', 'CSS', 'Java', 'Python']} typeSpeed={130} backSpeed={140} loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-blue-300'>The Right Side of the Equation.</p>
                <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Login</button>
            </div>
        </div>
    );
};

export default Hero;

