import React from 'react';
import heroImg from '../assets/454695807_3819709308355088_6529269106561561061_n.jpg'
import { motion } from "framer-motion";

const Hero = () => {
    return (
       <div className='flex flex-col md:flex-row lg:flex-row my-20 items-center justify-between gap-5 p-5'>
        <div className=''>
            <h3 className='text-3xl font-bold'>Hi, I am <span className='mx-2 text-purple-500'>ZAHID HOSEN</span>
           
            </h3>
            <p className='text-semibold my-3'>I am a Front END Developer</p>
            <button className='btn border border-purple-500'>
                <a href=""download="resume">Download Resume</a>
            </button>

        </div>
        <motion.div
         initial={{ opacity: 0, x: 70 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1.5 }}
        >
            <img className='w-3/4 h-auto rounded-xl' src={heroImg} alt="ZAHID" />
        </motion.div>
       </div>
    );
};

export default Hero;