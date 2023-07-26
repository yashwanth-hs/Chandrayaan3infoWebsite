/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { logo } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index*0.5, 0.75)}> 
        <Tilt
          options = {{
            max:45,
            scale:1,
            speed: 450
          }}
          className="bg-tertiary p-2 rounded-2xl sm:w-[360px] w-full"
        >
          <div className='relative w-auto h-[230px]'>
            <img src={image}
                alt={name}
                className="object-contain w-full h-full rounded-2xl" />
          
          <div
            className='absolute inset-0 flex justify-end m-3 card-img_hover'
          >
              <div onClick={()=> window.open(source_code_link, "_blank")}
                      className='flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient '>
                      <img    src={logo}
                              alt='ISRO'
                              className='object-contain w-1/2 h-1/2' />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[25px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>

          </div>

          <div className='flex flex-wrap gap-2 mt-4'>
            {tags.map((tag) =>
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>)}
          </div>
        </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Chandrayaan-3
Mission</p>
      <h2 className={styles.sectionHeadText}>Payloads</h2>
      </motion.div>
      
      <div className='flex flex-wrap pt-8 mt-18 gap-7'>
         {projects.map((project, index) => (
          
          <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project} 
          />
         ))}
         
      </div>
  
    </>
  )
}

export default SectionWrapper(Works, "");