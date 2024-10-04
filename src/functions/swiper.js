// import React, { useEffect, useRef } from 'react';
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // Import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Import the image correctly
// import testImage from '/Users/karming/byming/byming/src/images/test.jpg';

// const SwiperComponent = () => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     // Initialize Swiper
//     const swiper = new Swiper(swiperRef.current, {
//       modules: [Navigation, Pagination],
//       direction: 'horizontal',
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//     });

//     return () => {
//       swiper.destroy();
//     };
//   }, []);

//   return (
//     <div className="swiper" ref={swiperRef}>
//       <div className="swiper-wrapper">
//         <div className="swiper-slide">
//           <img className="slider-image" src={testImage} alt='test' />
//         </div>
//         <div className="swiper-slide">Slide 2</div>
//         <div className="swiper-slide">Slide 3</div>
//       </div>
//       <div className="swiper-pagination"></div>
//       <div className="swiper-button-prev"></div>
//       <div className="swiper-button-next"></div>
//       <div className="swiper-scrollbar"></div>
//     </div>
//   );
// };

// export default SwiperComponent;