import React from 'react';
import BoardofdirectorsImg from '../components/assets/images/BoardofdirectorsImg.jpeg';
import CAAmit from '../components/assets/images/CA AMIT.jpeg';

const Boardofdirectors = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-evenly items-center my-8">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-[20px] font-semibold">CA. Anish Singh (FCA, LLB)</h3>
        </div>
        <div className="w-40 h-40">
          <img src={BoardofdirectorsImg} alt="CA. Anish Singh" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      <div className="sm:w-11/12 mx-auto my-8">
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          Meet CA Anish Singh, a visionary leader and the Founder Director of Niti Chetna Foundation, a non-profit organization dedicated to empowering communities through awareness of government schemes and policies, financial literacy, and digital literacy.
        </p>
        <h3 className="text-[20px] font-semibold mb-2 text-left">Professional Background:</h3>
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          An accomplished Chartered Accountant, CA Anish Singh brings a wealth of financial expertise and a profound commitment to social welfare. With a strong foundation in accounting, taxation, and financial management, he has successfully leveraged his skills to contribute to the betterment of society.
        </p>
        <h3 className="text-[20px] font-semibold mb-2 text-left">Visionary Leadership:</h3>
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          As the Founder Director of Niti Chetna Foundation, CA Anish Singh has led the organization with a vision to bridge the information gap between government initiatives and the masses. His leadership is characterized by a passion for empowerment and a dedication to creating positive social impact.
        </p>
        <h3 className="text-[20px] font-semibold mb-2 text-left">Contributions to Financial Literacy:</h3>
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          Recognizing the transformative power of financial knowledge, CA Anish Singh has spearheaded initiatives to enhance financial literacy within communities. Through workshops, seminars, and educational programs, he aims to empower individuals to make informed financial decisions, thereby improving their overall quality of life.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly items-center my-8">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-[20px] font-semibold">CA. Amit Goswami (FCA, M.Com)</h3>
        </div>
        <div className="w-40 h-40">
          <img src={CAAmit} alt="CA. Amit Goswami" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>

      <div className="sm:w-11/12 mx-auto my-8">
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          Meet CA Amit Goswami, a visionary leader and the Founder Director of Niti Chetna Foundation, a non-profit organization dedicated to empowering communities through awareness of government schemes and policies, financial literacy, and digital literacy.
        </p>
        <h3 className="text-[20px] font-semibold mb-2 text-left">Professional Background:</h3>
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          An accomplished Chartered Accountant, CA Amit Goswami brings a wealth of financial expertise and a profound commitment to social welfare. With a strong foundation in accounting, taxation, and financial management, he has successfully leveraged his skills to contribute to the betterment of society.
        </p>
        <h3 className="text-[20px] font-semibold mb-2 text-left">Visionary Leadership:</h3>
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          As the Founder Director of Niti Chetna Foundation, CA Amit Goswami has led the organization with a vision to bridge the information gap between government initiatives and the masses. His leadership is characterized by a passion for empowerment and a dedication to creating positive social impact.
        </p>
        <h3 className="text-[20px] font-semibold mb-2 text-left">Contributions to Financial Literacy:</h3>
        <p className="text-[20px] text-justify mb-4 text-center sm:text-left">
          Recognizing the transformative power of financial knowledge, CA Amit Goswami has spearheaded initiatives to enhance financial literacy within communities. Through workshops, seminars, and educational programs, he aims to empower individuals to make informed financial decisions, thereby improving their overall quality of life.
        </p>
      </div>
    </div>
  );
};

export default Boardofdirectors;
