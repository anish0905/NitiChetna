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
//   const containerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

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
//         const newTranslate = -(window.innerWidth + window.innerWidth * 0.05) * newIndex;
//         setPrevTranslate(newTranslate);
//         setCurrentTranslate(newTranslate);
//         return newIndex;
//       });
//     }, 10000);

//     return () => clearInterval(autoSlide);
//   }, []);

//   return (
//     <div className=" w-full overflow-hidden mt-12">  
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
//         style={{ gap: '5%' }} // Ensure 5% gap between images
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="h-full"
//             style={{
//               width: 'calc(100% - 5%)', // Adjust image width to accommodate the gap
//               maxWidth: 'calc(100% - 5%)'
              
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DevelopmentGoal;



import React, { useState, useRef, useEffect } from 'react';

const originalImages = [
  require('../assets/images/3.webp'),
  require('../assets/images/4.webp'),
  require('../assets/images/5.webp'),
  require('../assets/images/7.webp'),
  require('../assets/images/8.webp'),
  require('../assets/images/10.webp'),
  require('../assets/images/17.webp')
  // Add more images as needed
];

const images = [...originalImages, ...originalImages]; // Duplicate the images

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
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate}px)`;

      // Handle infinite scroll effect
      const containerWidth = containerRef.current.offsetWidth;
      const imagesWidth = containerRef.current.scrollWidth / 2; // Since images array is duplicated
      if (currentTranslate <= -imagesWidth) {
        setPrevTranslate(0);
        setCurrentTranslate(0);
      } else if (currentTranslate >= 0) {
        setPrevTranslate(-imagesWidth);
        setCurrentTranslate(-imagesWidth);
      }
    }

    if (isDragging) {
      setAnimation(requestAnimationFrame(animationFrame));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPrevTranslate(0);
      setCurrentTranslate(0);
      if (containerRef.current) {
        containerRef.current.style.transform = 'translateX(0px)';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === originalImages.length - 1 ? 0 : prevIndex + 1;
        const newTranslate = -(window.innerWidth + window.innerWidth * 0.05) * newIndex;
        setPrevTranslate(newTranslate);
        setCurrentTranslate(newTranslate);
        return newIndex;
      });
    }, 10000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="w-full overflow-hidden mt-12">
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
            className="h-full"
            style={{
              width: '80%', // Set image width to 80%
              maxWidth: '80%'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DevelopmentGoal;
