// import React, { useRef, useEffect } from 'react';
// import A from '../assets/images/3.webp';
// import B from '../assets/images/4.webp';
// import C from '../assets/images/5.webp';
// import D from '../assets/images/7.webp';
// import E from '../assets/images/8.webp';
// import F from '../assets/images/10.webp';
// import G from '../assets/images/17.webp';

// const DevelopmentGoal = () => {
//   const sliderRef = useRef(null);

//   const isDown = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!isDown.current) return;
//       e.preventDefault();
//       const x = e.pageX - sliderRef.current.offsetLeft;
//       const walk = (x - startX.current) * 2; // Adjust scrolling speed
//       sliderRef.current.scrollLeft = scrollLeft.current - walk;
//     };

//     const handleMouseUp = () => {
//       isDown.current = false;
//       sliderRef.current.style.cursor = 'grab'; // Change cursor back to grab
//       document.body.removeEventListener('mousemove', handleMouseMove);
//       document.body.removeEventListener('mouseup', handleMouseUp);
//     };

//     if (isDown.current) {
//       document.body.addEventListener('mousemove', handleMouseMove);
//       document.body.addEventListener('mouseup', handleMouseUp);
//     }

//     return () => {
//       document.body.removeEventListener('mousemove', handleMouseMove);
//       document.body.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, []);

//   const startDragging = (e) => {
//     isDown.current = true;
//     startX.current = e.pageX - sliderRef.current.offsetLeft;
//     scrollLeft.current = sliderRef.current.scrollLeft;
//     sliderRef.current.style.cursor = 'grabbing'; // Change cursor to grabbing
//   };

//   const stopDragging = () => {
//     isDown.current = false;
//     sliderRef.current.style.cursor = 'grab'; // Change cursor back to grab
//   };

//   const handleClick = (e) => {
//     e.stopPropagation(); // Prevent the click event from bubbling up to the container
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h3 className="text-center text-2xl font-semibold">Towards Achieving</h3>
//       <h2 className="text-center text-3xl font-bold">Sustainable Development Goals</h2>

//       <div
//         ref={sliderRef}
//         className="flex overflow-x-scroll whitespace-nowrap mt-8 cursor-grab"
//         onMouseDown={startDragging}
//         onMouseLeave={stopDragging}
//         onMouseUp={stopDragging}
//         onMouseOut={stopDragging} // Ensure drag stops when mouse leaves the container
//         style={{ maxWidth: '100%' }} // Set max-width to ensure horizontal scrolling
//       >
//         <img src={A} alt="Goal 1" className="inline-block h-64 mx-2 rounded-lg" onClick={handleClick} />
//         <img src={B} alt="Goal 2" className="inline-block h-64 mx-2 rounded-lg" onClick={handleClick} />
//         <img src={C} alt="Goal 3" className="inline-block h-64 mx-2 rounded-lg" onClick={handleClick} />
//         <img src={D} alt="Goal 4" className="inline-block h-64 mx-2 rounded-lg" onClick={handleClick} />
//         <img src={E} alt="Goal 5" className="inline-block h-64 mx-2 rounded-lg" onClick={handleClick} />
//         <img src={F} alt="Goal 6" className="inline-block h-64 mx-2 rounded-lg" onClick={handleClick} />
//         <img src={G} alt="Goal 7" className="inline-block h-64 mx-2 rounded-lg" onClick={handleClick} />
//       </div>
//     </div>
//   );
// };

// export default DevelopmentGoal;

// import React, { useState, useRef, useEffect } from 'react';

// const images = [
//   require('../assets/images/3.webp'),
//   require('../assets/images/4.webp'),
//   require('../assets/images/5.webp'),
//   require('../assets/images/7.webp'),
//   require('../assets/images/8.webp'),
//   require('../assets/images/10.webp'),
//   require('../assets/images/17.webp')
//   // Add more images as needed
// ];

// const DevelopmentGoal = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPosition, setStartPosition] = useState(0);
//   const [currentTranslate, setCurrentTranslate] = useState(0);
//   const [prevTranslate, setPrevTranslate] = useState(0);
//   const [animation, setAnimation] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const getPositionX = (event) => {
//     return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
//   };

//   const touchStart = (event) => {
//     setIsDragging(true);
//     setStartPosition(getPositionX(event));
//     setAnimation(requestAnimationFrame(animationFrame));
//     containerRef.current.classList.add('grabbing');
//   };

//   const touchMove = (event) => {
//     if (isDragging) {
//       const currentPosition = getPositionX(event);
//       const translation = prevTranslate + currentPosition - startPosition;
//       setCurrentTranslate(translation);
//     }
//   };

//   const touchEnd = () => {
//     setIsDragging(false);
//     setPrevTranslate(currentTranslate);
//     containerRef.current.classList.remove('grabbing');
//     cancelAnimationFrame(animation);
//   };

//   const animationFrame = () => {
//     containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
//     if (isDragging) {
//       setAnimation(requestAnimationFrame(animationFrame));
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setPrevTranslate(0);
//       setCurrentTranslate(0);
//       containerRef.current.style.transform = 'translateX(0px)';
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
//         setPrevTranslate(-window.innerWidth * newIndex);
//         setCurrentTranslate(-window.innerWidth * newIndex);
//         return newIndex;
//       });
//     }, 10000);

//     return () => clearInterval(autoSlide);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         ref={containerRef}
//         className="flex transition-transform duration-700 ease-in-out h-72 w-full"
//         onMouseDown={touchStart}
//         onMouseMove={touchMove}
//         onMouseUp={touchEnd}
//         onMouseLeave={touchEnd}
//         onTouchStart={touchStart}
//         onTouchMove={touchMove}
//         onTouchEnd={touchEnd}
//         onTouchCancel={touchEnd}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="w-full h-full"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DevelopmentGoal;




import React, { useState, useRef, useEffect } from 'react';

const images = [
  require('../assets/images/3.webp'),
  require('../assets/images/4.webp'),
  require('../assets/images/5.webp'),
  require('../assets/images/7.webp'),
  require('../assets/images/8.webp'),
  require('../assets/images/10.webp'),
  require('../assets/images/17.webp')
  // Add more images as needed

];

const DevelopmentGoal = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [animation, setAnimation] = useState(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const touchStart = (event) => {
    setIsDragging(true);
    setStartPosition(getPositionX(event));
    setAnimation(requestAnimationFrame(animationFrame));
    containerRef.current.classList.add('grabbing');
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const translation = prevTranslate + currentPosition - startPosition;
      setCurrentTranslate(translation);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
    containerRef.current.classList.remove('grabbing');
    cancelAnimationFrame(animation);
  };

  const animationFrame = () => {
    containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) {
      setAnimation(requestAnimationFrame(animationFrame));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPrevTranslate(0);
      setCurrentTranslate(0);
      containerRef.current.style.transform = 'translateX(0px)';
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        const newTranslate = -((window.innerWidth + window.innerWidth * 0.05) * newIndex);
        setPrevTranslate(newTranslate);
        setCurrentTranslate(newTranslate);
        return newIndex;
      });
    }, 10000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out h-72 w-full"
        onMouseDown={touchStart}
        onMouseMove={touchMove}
        onMouseUp={touchEnd}
        onMouseLeave={touchEnd}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        onTouchCancel={touchEnd}
        style={{ gap: '5%' }} // Ensure 5% gap between images
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="h-full "
            style={{
              width: 'calc(100% - 50%)', // Adjust image width to accommodate the gap
              maxWidth: 'calc(100% - 5%)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DevelopmentGoal;
