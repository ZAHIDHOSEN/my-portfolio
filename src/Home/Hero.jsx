import React from 'react';
import heroImg from '../assets/454695807_3819709308355088_6529269106561561061_n.jpg'

const Hero = () => {
    return (
       <div className='lg:flex  md:flex my-20 items-center justify-between '>
        <div className=''>
            <h3 className='text-3xl font-bold'>Hi, I am ZAHID HOSEN</h3>
            <p className='text-semibold my-3'>I am a Front END Developer</p>
            <button className='btn'>
                <a href=""download="resume">Download Resume</a>
            </button>

        </div>
        <div>
            <img className='h-9/12 w-9/12 rounded-xl' src={heroImg} alt="" />
        </div>
       </div>
    );
};

export default Hero;