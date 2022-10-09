import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className=''>
        <div className='text-black'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] md:text-3xl sm:text-4xl text-1l font-bold m:py-6'>
                    Green Finance for Better Future
                </p>  
                <h1 className= "md:text-7xl sm:text-6xl text-3xl font-bold m:py-6">
                    Search Your Super
                </h1>
                <div className= 'flex justify-center items-center'>
                    <p className='md:text-1xl sm:text-1xl text-1l font-bold py-4'>
                        is my super green ? 
                    </p>
                    <Typed className='md:text-1xl sm:text-1xl text-1l md:pl-4 pl-2' 
                    strings={['Australia Super','other','lorem']} typespeed = {300} backSpeed ={140} loop/>
                </div>
                <div>
                <p className='md:text-m text-m font-bold text-gray-500'>
                We make it our mission to help and support green investment policies across the board by giving the client the knowledge of where the money is going. 
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Hero;