import React from 'react';
import { FaHtml5 } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className=' mb-20'>
            <div className='mb-10'>
                <h3 className='text-3xl font-bold text-center'>Skills</h3>

            </div>
            <div className='lg:flex md:flex justify-center gap-4'>
           <div>
           <img className='h-28' src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`} alt="" />

           </div>
           <div>
            <img className='h-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" />
           </div>
           <div>
            <img className='h-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
           </div>
           <div>
            <img className='h-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
           </div>
           <div>
            <img className='h-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="" />
           </div>
           <div>
            <img className='h-28' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
           </div>
          
            </div>
            
        </div>
    );
};

export default Skills;