import React from 'react';
import { BiBlanket} from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
const Section1 = () => {
    return (
        <div className=' bg-slate-600 mt-3 mb-2 pb-5 mx-4'>
        <div>
            <h1 className='text-center text-5xl text-white pt-5'> Universe of great insights</h1>
            <p className='text-center text-2xl text-white pt-5'>Typing skills? Check. Take the next step and make your online communication outstanding. </p>
                
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 mx-2' >

<div className="card  bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className=" text-white  text-5xl"> <BiBlanket/> </h2>
    <h2 className="card-title text-3xl">Courses !</h2>
    <p>in-depth knowledge thats easy to apply.</p>
    <div className="card-actions justify-end">
      <button className="text-green-500 text-2xl">Check Courses</button>
     
    </div>
  </div>
</div>
<div className="card  bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
  <h2 className=" text-white  text-5xl"> <HiOutlineCalendarDays/> </h2>
    <h2 className="card-title text-3xl"> Guides !</h2>
    <p> Quick study with compprehensive on-pagers .</p>
    <div className="card-actions justify-end">
      <button className="text-green-500 text-2xl"> Browse Guides</button>
     
    </div>
  </div>
</div>
<div className="card  bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
  <h2 className=" text-line-white  text-5xl "> <TfiEmail/> </h2>
    <h2 className="card-title text-3xl "> Email Templates !</h2>
    <p> Task-oriented cheat sheets.</p>
    <div className="card-actions justify-end">
      <button className="text-green-500 text-2xl">See Templates </button>
     
    </div>
  </div>
</div>

                 </div>
              
               </div>
        </div>
    );
};

export default Section1;