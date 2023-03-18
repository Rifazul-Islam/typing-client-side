import React from 'react';
import { Link } from "react-router-dom";
const Navber = () => {
  const itemsMenu = <>
                 
          <li > Home </li>
          <li className='mx-5'> Contact </li>
      <li> Blog  </li> 

  
</>
    return (
      <div className=' mx-4 mt-2 '>
  <div style={{background:'#55C5FF'}}  className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       
             {itemsMenu}
      </ul>
    </div>
    <p className="btn btn-ghost normal-case text-xl"><p className=' ml-32' >Typing Test </p></p>
  </div>
  <div className=" ml-96 text-1xl navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {itemsMenu}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navber;