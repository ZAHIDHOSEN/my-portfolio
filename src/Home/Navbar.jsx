import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/project/project4.png'

const Navbar = () => {
    const links = <>
   <li><Link to={`/`}>Home</Link></li> 
   <li><Link to={`/about`}>About</Link></li> 
   <li><Link to={`/skill`}>Skills</Link></li> 
    <li><Link to={`/project`}>project</Link></li>
   <li> <Link to={`/contact`}>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-purple-500 text-white sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-purple-500 text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
           {links}
            </ul>
          </div>
          <img className='h-14 w-14 rounded-full' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
         <a className='btn' href="/zahid-resume.pdf"download={`resume`}>Resume</a>
        </div>
      </div>
    );
};

export default Navbar;