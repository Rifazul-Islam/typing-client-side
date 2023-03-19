import React from 'react';

import { BiPlayCircle } from "react-icons/bi";
const Section2 = () => {
    return (
  <div className='mx-4'>

<div className="hero  bg-yellow-400">
  <div className="hero-content flex-col lg:flex-row-reverse">

  <a  href="https://www.youtube.com/watch?v=Uakt6desEt8" target="_blank">
  <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img  src="https://img.youtube.com/vi/Uakt6desEt8/maxresdefault.jpg" alt='' className=" bg-red-800 rounded-lg shadow-2xl  " /></figure>
      

        <div className="card-body">
        <p className='text-8xl text-white m-auto text-center grid mt-10 lg:mt-20'> <BiPlayCircle/></p>
        <p className='text-white text-4xl m-auto text-center'> Watch on YouTube </p>
    </div>
</div>
</a>
      
    <div>
      <h1 className="text-4xl font-bold">How to type faster? Typing speed test for customer support!</h1>
      
      <p className="py-6 text-1xl ">Take a deep breath, relax your fingers,
       and take it slow. You need to be focused and not annoyed when attempting
        the typing speed test. The best thing you can do to start typing faster 
        is to type more.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Section2;
