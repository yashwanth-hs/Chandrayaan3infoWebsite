/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { logo } from '../assets';
import { SectionWrapper } from '../hoc';
import {  lvm3 } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { slideIn } from '../utils/motion';

const Lvm3Card = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <Tilt
    options = {{
      max:45,
      scale:1,
      speed: 450
    }}
    className="w-[550px] p-1 green-pink-gradient rounded-2xl sm:w-[full] xl:flex-row md:justify-center"
  > 
    <motion.div
        variants={fadeIn("right","spring", 0.5*index, 0.75)}
        className='bg-slate-950 rounded-[20px] py-5 px-12 sm:[400px]'
      >

          <div className='relative w-full h-[430px] rounded-2xl'>
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
            <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>{description}</p>
          </div>

          <div className='flex flex-wrap gap-2 mt-4'>
            {tags.map((tag) =>
            <p key={tag.name} className={`text-[16px] ${tag.color}`}>
              {tag.name}
            </p>)}
          </div>
        
        </motion.div>
    </Tilt>
  )
}


const Lvm3 = () => {
  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-0 xl:flex-row'>

    <motion.div
       variants={slideIn('right', "tween", 0.2, 1)}
       className='m-2 xl:flex-1'       
    >
         <div className='flex justify-end mt-18 gap-7 '>
         {lvm3.map((project, index) => (
          <Lvm3Card
          key={`project-${index}`}
          index={index}
          {...project} 
          />
         ))}

      </div>    
    </motion.div>

    
    <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-slate-950 p-8 sm:w-[full] rounded-2xl h-[780px]'>
        
        <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Chandrayaan 3</p>
      <h2 className={styles.sectionHeadText}>LVM3-M4</h2>
      </motion.div>

      <div className='flex w-full h-[650px]'>
          <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 green-text-gradient text-[17px] max-w-3xl leading-[30px]'
          >
LVM3 is the operational heavy lift
launch vehicle of ISRO and has a
spectacular pedigree of completing
6 consecutive successful missions. This
is the 4th operational flight of LVM3,
aims to launch the Chandrayaan-3
spacecraft to Geo Transfer Orbit (GTO).  <br/>
LVM3-M4 will be launched from the
Second Launch Pad (SLP), SDSC, SHAR.
<br/>
<br/>
          <span className='font-semibold blue-text-gradient' >LVM3-M4 Vehicle
Characteristics</span><br/>
<span className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>Height 43.5 m</span><br/>
<span className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>Lift-off Mass 642 t</span><br/>
<span className='blue-text-gradient'>Propulsion Stages : </span><br/>
<span className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>Strap-on Motors 2 x S200(Solid)</span><br/>
<span className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>Core Stage L110 (Liquid)</span><br/>
<span className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>Upper Stage C25 (Cryo)</span><br/>
<span className=' text-secondary text-[17px] max-w-3xl leading-[30px]'>Payload Fairing 5 m OPLF</span><br/>



          </motion.p>
        
    </div>
    </motion.div>


    </div>
  )
}

export default SectionWrapper(Lvm3, "lvm3");