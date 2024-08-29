import React from 'react';

// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640] mb-8 xl:mb-24'>
       <div className='flex flex-col lg:flex-row'>
          <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
            <h1 className='text-3xl lg:text-[50px] font-semibold leading-none mb-6'>
              <span className='text-violet-800'>Rent</span> Your Dream House With us.
            </h1>
              <p className='max-w-[300px] mb-8 text-justify'>
                lorem10 ipsum dolor sit amet consectetur
                adipisicing elit. Debitis magnam autem 
                lorem10 ipsum dolor sit amet consectetur
                adipisicing elit. Debitis magnam autem
                minus expedita accusantium quam fugit
              </p>
          </div>
          {/* image */}
          <div className='hidden flex-1 lg:flex justify-end items-end'>
            <img src={Image} alt='' />
          </div>
       </div>
       <Search />
    </section>
  )
  
};

export default Banner;
