/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-[300px] pr-5">
      <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}

        className='bg-slate-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title}
        className='object-contain w-16 h-16'
        />
        <h3 className='text-white text-[18px] font-semibold text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
 

    <motion.div variants={textVariant()}>
      
    {/* <div id="newslike">
                <div id="news1">
                    <h4>CRICKET</h4>
                    <h4>FOOTBALL</h4>
                    <h4>BADMINTON</h4>
                    <h4>BASKETBALL</h4>
                    <h4>VOLLEYBALL</h4>
                </div>
                <div id="news1">
                    <h4>CRICKET</h4>
                    <h4>FOOTBALL</h4>
                    <h4>BADMINTON</h4>
                    <h4>BASKETBALL</h4>
                    <h4>VOLLEYBALL</h4>                    
                </div>
            </div> */}
      <p className={styles.sectionSubText}>LVM3-M4
</p>
      <h2 className={styles.sectionHeadText}>Chandrayaan-3 Mission</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 green-text-gradient text-[17px] max-w-3xl leading-[30px]'
    >
      Chandrayaan-3, India’s third lunar exploration mission is ready
to take off in fourth operational mission (M4) of LVM3 launcher.
ISRO is crossing new frontiers by demonstrating soft landing on
lunar surface by its lunar module and demonstrate roving on
the lunar terrain. It is expected to be supportive to ISRO’s future
interplanetary missions.
<br></br>

Additionally the deployment of rover and in-situ scientific
experiment will scale new heights in lunar expeditions by
deploying Rover. Yes, ISRO is bringing the Moon closer to us. 
    </motion.p>

    <motion.div className='flex h-[10px] mt-12 font-bold text-[30px] text-blue-400'>
      <p >Objectives :</p>
    </motion.div>
    <div className='flex flex-wrap gap-10 mt-20' > 
       {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
       ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");