import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


const Skills = () => {

  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
];  

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateMatch = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", updateMatch);
    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
};

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const duration = isLargeScreen ? 10 : isMediumScreen ? 8 : 7;


    return (
        <div className='mb-20'>
            <h3 className='text-3xl font-bold text-center mb-10'>Skills</h3>
            
            <div className='relative overflow-hidden border border-purple-500 py-4'>
                <motion.div
                    className='flex gap-8'
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration, ease: "linear" }}
                >
                    {skills.map((skill, index) => (
                        <img key={index} className='h-28' src={skill.icon} alt={skill.name} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
