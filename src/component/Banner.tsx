import React from 'react';

const Banner = () => {
    return (
        <div  className='mx-4 mt-1 bg-slate-800 h-[550px]'>
        <div className="hero   ">
       <div className="hero-content flex-col lg:flex-row">
         <img className=' w-1/2' src="https://www.ratatype.com/static/i/retina/certification-hand@2x.webp" alt='#' />
         <div>
           <h1 className="text-5xl font-bold text-white">Typing Test </h1>
           <p className="py-6 text-white ">You can test your typing speed in wpm on English, Spanish, or French and impress your friends or employers with your own typing certificate. Test your typing speed, and find out how fast you type, and then improve your typing speed if necessary.</p>
           <button className="btn btn-primary">More ... </button>
         </div>
       </div>
     </div>
             </div>
    );
};

export default Banner;