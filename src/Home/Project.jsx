import React from 'react';
import project1 from'../assets/project/project1.png'
import project2 from '../assets/project/project2.png'
import project3 from '../assets/project/project3.png'
import { FaJs, FaReact } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';

const Project = () => {
    return (
        <div className=''>
            <h3 className='text-center font-bold text-3xl mb-10'>Projects</h3>
            <div className='lg:flex md:flex gap-14 items-center'>
                <div>
                    <img className='h-84 w-96 rounded-2xl' src={project1} alt="" />
                </div>
                <div id='feature'>
                <div>
                <h3 className='text-2xl font-bold my-3'>Blood Donation Application</h3>
                <p className='my-3'>This is a blood donation web application.This is made for donars and requester that who need blood</p>
                <p>1. Role-Based Blood Donation Management – Users (Admin, Donor) can register, <br />manage donation requests, and track donation statuses.</p>
                <p className='my-3'>2. Secure & Responsive Dashboard – Interactive dashboards for each role with CRUD operations,<br /> donation tracking, and user management.</p>
                 <p>3. Efficient Search & Funding System – Search donors by blood type and location,<br /> plus a Stripe-integrated funding system for donations.</p>
                </div>
               <div className='flex gap-10 my-5'>
               <button className='btn'><FaJs /></button>
                <button className='btn'><FaReact /></button>
                <button className='btn'><DiMongodb /></button>
                

               </div>
               <div className='flex gap-8'>
                <a href="https://github.com/ZAHIDHOSEN/Blood-donation-website-client">
                <button className='btn border border-purple-500'>github link</button>
                </a>
                <a href="https://blood-donation-website-e55bf.web.app">
                    <button className='btn border border-purple-500'>Live link</button>
                </a>
               </div>
                </div>

            </div>
            {/* second project */}
            <div className='lg:flex md:flex  items-center gap-14 mt-20'>
                <div>
                    <img className='h-84 w-96 rounded-2xl' src={project2} alt="" />
                </div>
                <div id='feature-2'>
                <div>
                <h3 className='text-2xl font-bold my-3'>Online Group Study Web Application</h3>
                <p className='my-3'>This is a online group study assignment based web application</p>
                <p>1. Assignment Management – Create, submit, and grade assignments with secure access.</p>
                <p className='my-3'>2. Secure Authentication – Email/password & social login with JWT-protected routes.</p>
                 <p>3. User-Friendly UI – Responsive design, dark mode, and search/filter options.</p>
                </div>
               <div className='flex gap-10 my-5'>
               <button className='btn'><FaJs /></button>
                <button className='btn'><FaReact /></button>
                <button className='btn'><DiMongodb /></button>
                

               </div>
               <div className='flex gap-8'>
                <a href="https://github.com/ZAHIDHOSEN/online-group-study-web-application">
                <button className='btn border border-purple-500'>github link</button>
                </a>
                <a href="https://assignment-11-client-f745e.web.app">
                    <button className='btn border border-purple-500'>Live link</button>
                </a>
               </div>
                </div>

            </div>
            {/* last project */}
            <div className='lg:flex md:flex  items-center gap-14 mt-20'>
                <div>
                    <img className='h-84 w-96 rounded-2xl' src={project3} alt="" />
                </div>
                <div id='feature-2'>
                <div>
                <h3 className='text-2xl font-bold my-3'>BPL Bating Related Web APPlication</h3>
                <p className='my-3'>This is bpl bating related web application.where the company buy a player</p>
                <p>1. You can buy player for your team from this web application.</p>
                <p className='my-3'>2. you can sell the player from useing this web application.This is the key feature of this application</p>
                 <p>3. User-Friendly UI – Responsive design, other functionality implemented.</p>
                </div>
               <div className='flex gap-10 my-5'>
               <button className='btn'><RiTailwindCssFill /></button>
               <button className='btn'><FaJs /></button>
                <button className='btn'><FaReact /></button>
                
                

               </div>
               <div className='flex gap-8'>
                <a href="https://github.com/ZAHIDHOSEN/online-group-study-web-application">
                <button className='btn border border-purple-500'>github link</button>
                </a>
                <a href="https://assignment-11-client-f745e.web.app">
                    <button className='btn border border-purple-500'>Live link</button>
                </a>
               </div>
                </div>

            </div>
        </div>
    );
};

export default Project;