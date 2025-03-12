import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';


const Home = () => {
    return (
        <div className=''>
            
            
            
            <div className='w-9/12 mx-auto '>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            </div>

          
            
           
        </div>
    );
};

export default Home;