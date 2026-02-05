"use client";
import Image from 'next/image'
import '../globals.css'
import { motion } from 'framer-motion';



const Header = () => {
  return (
    <>
    <div id='intro-text'>
        <motion.h2
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        >¡Hola!, soy</motion.h2>
        <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.5}}
        >André ☕, </motion.h1>
        <motion.h3
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2.5}}
        ><span>Data Analyst</span>, estudiante de <span>Data Science</span> y <span>ML/IA.</span></motion.h3>
        <a href='mailto:andres10dominguez@gmail.com'><button>Contactar</button></a>
    </div>
    <div className="profiling">
        <Image
        src='/img/profile.jpg'
        width='250'
        height='250'
        alt='profile-photo'
        className='profile'
        >

        </Image>
        </div>
        <div className="ellipse"></div>
        <div className="ellipse"></div>
        <div className="ellipse"></div>
        <div className="ellipse"></div>
    </>
  )
}

export default Header