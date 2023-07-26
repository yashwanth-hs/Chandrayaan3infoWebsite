/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { logo } from '../assets';
import { SectionWrapper } from '../hoc';
import {  propulsion } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { slideIn } from '../utils/motion';

const PropulsionCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <Tilt
    options = {{
      max:45,
      scale:1,
      speed: 450
    }}
    className="green-pink-gradient p-1 rounded-2xl sm:w-[480px] w-full xl:flex-row "
  > 
    <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='bg-slate-950 rounded-[20px] py-5 px-12'
      >

          <div className='relative w-full h-[430px]'>
            <img src={image}
                alt={name}
                className="object-contain w-full h-full rounded-3xl" />
          
          <div
            className='absolute inset-0 flex justify-end m-3 card-img_hover'
          >
              <div onClick={()=> window.open(source_code_link, "_blank")}
                      className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient '>
                      <img    src={logo}
                              alt='ISRO_LINK'
                              className='object-contain w-1/2 h-1/2' />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[25px]'>{name}</h3>
          </div>

          <div className='flex flex-wrap gap-2 mt-4'>
            {tags.map((tag) =>
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>)}
          </div>
        
        </motion.div>
    </Tilt>
  )
}


const Propulsion = () => {
  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-0 xl:flex-row'>


    <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-slate-950 p-8 rounded-2xl h-[650px]'>
        
        <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Chandrayaan 3</p>
      <h2 className={styles.sectionHeadText}>Propulsion Module</h2>
      </motion.div>

      <div className='flex w-full h-[300px]'>
          <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 green-text-gradient text-[17px] max-w-3xl leading-[30px] h-[400px]'
          >
Chandrayaan-3 consists of an indigenous propulsion module, lander module, and a rover with an objective of developing
 and demonstrating new technologies required for inter-planetary missions. The propulsion module will carry the lander
  and rover from injection orbit to till 100 km lunar orbit. It also carries a Spectro-polarimetry of Habitable Planetary Earth (SHAPE)
   payload to study the spectral and polarimetric measurements of earth from the lunar orbit. The main function of Propulsion Module is 
   to carry the LM from launch vehicle injection orbit to till Lander separation. 
          </motion.p>
        
    </div>
    </motion.div>



    <motion.div
       variants={slideIn('right', "tween", 0.2, 1)}
       className='xl:flex-1 '       
    >
         <div className='flex justify-end mt-18 gap-7'>
         {propulsion.map((project, index) => (
          <PropulsionCard
          key={`project-${index}`}
          index={index}
          {...project} 
          />
         ))}

      </div>    
    </motion.div>


    </div>
  )
}

export default SectionWrapper(Propulsion, "");