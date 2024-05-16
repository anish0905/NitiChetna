import React from 'react'
import Stories1 from '../assets/images/Stories1.jpg'
import Stories2 from '../assets/images/Stories2.jpg'
import Stories3 from '../assets/images/Stories3.jpg'
import Stories4 from '../assets/images/Stories4.jpg'
import Stories5 from '../assets/images/Stories5.jpg'
import Stories6 from '../assets/images/Stories6.jpg'
import Stories7 from '../assets/images/Stories7.jpg'
import Stories8 from '../assets/images/Stories8.jpg'
import Stories9 from '../assets/images/Stories9.jpg'
import Stories10 from '../assets/images/Stories10.jpg'
import Stories11 from '../assets/images/Stories11.jpg'
import Stories12 from '../assets/images/Stories12.jpg'

import Stories14 from '../assets/images/Stories14.jpg'
import Stories15 from '../assets/images/Stories15.jpeg'
import Stories16 from '../assets/images/Stories16.jpeg'

const Stories = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-2xl lg:text-4xl font-semibold mb-8  text-custerText ">
        Stories in <br /> Motion
      </h1>
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <img src={Stories1} alt="Story 1" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories2} alt="Story 2" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories3} alt="Story 3" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories4} alt="Story 4" className="w-full lg:w-1/4 h-auto rounded-lg" />
      </div>


      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-8">
        <img src={Stories5} alt="Story 1" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories6} alt="Story 2" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories7} alt="Story 3" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories8} alt="Story 4" className="w-full lg:w-1/4 h-auto rounded-lg" />
      </div>


      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-8">
        <img src={Stories9} alt="Story 1" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories10} alt="Story 2" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories11} alt="Story 3" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories12} alt="Story 4" className="w-full lg:w-1/4 h-auto rounded-lg" />
      </div>



      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-8">
       
        <img src={Stories14} alt="Story 2" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories15} alt="Story 3" className="w-full lg:w-1/4 h-auto rounded-lg" />
        <img src={Stories16} alt="Story 4" className="w-full lg:w-1/4 h-auto rounded-lg" />
      </div>



    </div>
  )
}

export default Stories
