import React from 'react'
import Robot from '../assets/Robot.png'

const Gallery = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className= 'max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Robot} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-blue-500 font-bold'>PROJECT DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Student Gallery

                    </h1><p>Come see our student's gallery where all coding projects are displayed</p>
                    <button className='bg-blue-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-2 py-3'>See Here</button>
                </div>
            </div>
            
        </div>
    );
};

export default Gallery;