import React from 'react'
import Typed from 'react-typed'




const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-6 ' > Merhaba! Ben Mahmut İÇME </h1>
            
            <p className='font-bold md:text-4xl sm:text-3xl text-xl'>
            Ben ilgi çeken, kullanımı kolay ve responsive web siteleri&uygulamaları geliştiren bir FRONTEND DEVELOPER ım.
            </p>
            <Typed className='pt-8 font-bold md:text-4xl sm:text-3xl text-xl' strings={['FRONTEND DEVELOPER, SOFTWARE ENGINER, REACT DEVELOPER']} typeSpeed={120} backSpeed={140} loop />
          <a href='#bilgim'>
          <button id='' className='duration-300 bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black relative '>YAZILIM BİLGİM</button>
          </a>
          
  
           
        </div>
    </div>
 

      
  )
}

export default Hero