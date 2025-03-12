import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../layout/Mainlayout";
import About from "../Home/About";
import Skills from "../Home/Skills";
import Project from "../Home/Project";
import Contact from "../Home/Contact";




 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'skill',
          element: <Skills></Skills>
        },
        {
          path: 'project',
          element: <Project></Project>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        }
      ]

       
      
      
    },
  ]);