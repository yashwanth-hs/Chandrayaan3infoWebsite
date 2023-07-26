/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard =({ experience }) => (
  <VerticalTimelineElement
   contentStyle={{background: '#020617', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex items-center justify-center w-full h-full">
      <img src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain" />
    </div>
  }
  >
    <div>
       <h3 className="green-text-gradient text-[24px] font-bold">{experience.title}</h3>
       <p className="pink-text-gradient text-[16px] font-semibold
       " style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 ml-5 space-y-2 list-disc">
      {experience.points.map((point, index) => (
         <li key={`experience-point-${index}`}
             className="blue-text-gradient text-[14px] pl-1 tracking-wider">
              {point}
             </li>
      ))}
    </ul>
    <div className='relative w-auto h-auto'>
             <img src={experience.image}
                 className="object-contain w-auto h-auto mt-4 rounded-2xl" />
          </div> 
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>The various mission phases are classified as follows: </p>
      <h2 className={styles.sectionHeadText}>Mission Sequence</h2>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
              <ExperienceCard key={index} 
              experience={experience} />
            ))}
        </VerticalTimeline>



      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");