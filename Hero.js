import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] p-4 mx-auto'>
        <div className='max-h-[500px] relative'>
            
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200max-h-[500px] bg-black/70 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white'><span className='text-orange-600'> Discover</span> Manipal's</h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white'>Unbeatable <span className='text-orange-600'> Deals</span></h1>
            </div>
            
            <img className='w-full max-h-[500px] object-cover' src="https://i.pinimg.com/474x/a9/56/9c/a9569ceb0aebd85f2976cda06a3f8f28.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Hero