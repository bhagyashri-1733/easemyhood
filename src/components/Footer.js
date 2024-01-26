import React from 'react'
import ItemContainer from './ItemContainer'

const Footer = () => {
  return ( 
    <footer className='bg-blue-900 text-white'>
        <div className="md:flex md:justify-between  md::items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <h5 className="lg:text-4xl text-3xl mb:mb-0 mb-6 lg:leading-mormal font-semibold md:w-2/5"> 
            <span className="text-white">easemyhood
                </span></h5>
            <div className='flex'>
                <input
                type="text"
                placeholder="Name"
                className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-4 mb-4 py-2.5 rounded-xl px-2 focus:outline-none">
                </input>
                <input
                type="email"
                placeholder="example@gmail.com"
                className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-4 mb-4 py-2.5 rounded-xl px-2 focus:outline-none">
                </input> 
                <button className='bg-white text-black rounded-xl h-12 w-20 font-semibold '> Sign Up</button>
            </div>

        </div>
        <ItemContainer/>
      
    </footer>
  )
}

export default Footer
