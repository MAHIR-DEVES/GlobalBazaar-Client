// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import SlidesCard from './SlidesCard';

// function AutoPlay() {
//   const [slides, setSlides] = useState([]);

//   const axiosSecure = useAxiosSecure();

// useEffect(() => {
//   axiosSecure('https://b11-assignment-11.vercel.app/get-allProduct')
//     .then(res => {
//       setSlides(res.data);
//       console.log(res.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }, [axiosSecure]);

// const slides = [
//   {
//     id: 1,
//     title: 'Summer Collection',
//     subtitle: 'New Arrivals',
//     bgColor: 'bg-gradient-to-r from-pink-500 to-rose-500',
//   },
//   {
//     id: 2,
//     title: 'Winter Special',
//     subtitle: 'Up to 50% Off',
//     bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
//   },
//   {
//     id: 3,
//     title: 'Accessories',
//     subtitle: 'Trending Now',
//     bgColor: 'bg-gradient-to-r from-purple-500 to-indigo-500',
//   },
//   {
//     id: 4,
//     title: 'Limited Edition',
//     subtitle: 'Exclusive Items',
//     bgColor: 'bg-gradient-to-r from-amber-500 to-yellow-500',
//   },
//   {
//     id: 5,
//     title: 'Sports Gear',
//     subtitle: 'Performance Wear',
//     bgColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
//   },
//   {
//     id: 6,
//     title: 'Clearance Sale',
//     subtitle: 'Last Chance',
//     bgColor: 'bg-gradient-to-r from-red-500 to-orange-500',
//   },
// ];

//   return (
//     <div className="bg-[#eef4ff] dark:bg-gray-800 py-12  sm:px-6 lg:px-8">
//       <div className="w-full">
//         <h2 className="text-3xl font-bold dark:text-white text-black mb-8 text-center">
//           Featured Collections
//         </h2>
//         <div className="flex ">
//           <SlidesCard slides={slides}></SlidesCard>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AutoPlay;
