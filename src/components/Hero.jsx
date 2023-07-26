/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import Countdown from './CountDown';

const Hero = () => {
  return (

    

    <section className='w-full h-screen mx-auto'>
 

      <div className={`${styles.paddingX} absolute inset-0 top-[95px] max-w-7xl mx-auto flex
      flex-row items-start gap-5 mt-20`}>
  
        <div className='flex flex-col items-center justify-center mt-5'>

          <div className='w-5 h-5 rounded-full flex flex-2 relative bg-[#fe9336]'/>
          <div className='w-1 h-40 sm:h-80 saffron-gradient'/>

          </div>

         <div className='flex flex-col items-center justify-center mt-5'>

          <div className='w-5 h-5 rounded-full mt-12 bg-[#3ed345]'/>
          <div className='w-1 h-40 sm:h-80 green-gradient'/>

          </div>
        <div>

          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span 
          className='blue-text-gradient'>Vikram</span></h1>

          <p className={`${styles.heroSubText} mt-2 text white-100`}>
          I'm so excited to be part of this historic mission! As a proud Indian, I feel honored to be carrying Pragyan and ready to explore the lunar surface.
           There's so much to discover and learn, and I can't wait to see what we find.  <br className='block sm:'/> 
           It's a thrilling adventure, and I'm grateful to be a part of it. Let's go!</p>
           
        </div>
        </div>

        <ComputersCanvas />
        


    </section>
  )
}

export default Hero
