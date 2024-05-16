import React from 'react';
import CountUp from 'react-countup';

const CountDown = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-custerText">
      <h1 className="text-center text-2xl lg:text-4xl font-bold my-8">#NITICHETNA / #SCHEMESFORYOU</h1>
      <div className="flex flex-wrap justify-center gap-36 mt-8">
        <div className="text-center">
          <h1><CountUp end={100} duration={5} /> L</h1>
          <h3>Lac</h3>
          <p>children and <br />their families are <br /> impacted every year</p>
        </div>
        <div className="text-center">
          <h1><CountUp end={2000} duration={5} /> +</h1>
          <h3>Villages</h3>
          <p>and slums <br />
            are reached out <br />
            to across the country</p>
        </div>
        <div className="text-center">
          <h1><CountUp end={200} duration={4} /> +</h1>
          <h3>Project Found</h3>
          <p>focused on <br />
            education, healthcare, <br />
            and women empowerment</p>
        </div>
        <div className="text-center">
          <h1><CountUp end={10} duration={8} /> +</h1>
          <h3>States</h3>
          <p>are reached <br />
            including the <br />
            remotest areas</p>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
