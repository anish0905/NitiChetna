import React from 'react'
import aboutImg from '../assets/images/aboutUs.png'

const AboutUs = () => {
  return (
    <div>
    <h2 className='text-center mt-10'>About Us</h2>
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-8 p-4">
      <div className="sm:w-1/2 text-xl tracking-wide text-center sm:text-left">
        <p className="mb-4">
          Established in 2020, Niti Chetna Foundation is an Indian development organization, impacting the lives of over 15 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood, and women empowerment in over 2,000 remote villages and urban slums across 25 states of India.
        </p>
        <p>
          Niti Chetna Foundation works as a catalyst in the cycle of change, complementing and supplementing government efforts to achieve the Sustainable Development Goals. We sensitize and partner with like-minded institutions and individuals to implement high-impact programmes that enable access, enhance quality and help bring long term behavioural change at the grassroots.
        </p>
      </div>
      <div className="sm:w-1/2 flex justify-center">
        <img src={aboutImg} alt="About Us" className="w-full max-w-md" />
      </div>
    </div>
  </div>
  );


}

export default AboutUs
