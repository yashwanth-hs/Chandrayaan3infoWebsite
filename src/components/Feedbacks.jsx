/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import {testimonials} from '../constants';

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
  <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)}
  className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
        <p className= " green-text-gradient tracking-wider text-[18px]">{testimonial}</p>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Do you know ?</p>
            <h2 className={styles.sectionHeadText}>Interesting Facts</h2>
          </motion.div>
      </div>

    <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) =>(
          <FeedbackCard 
              key={testimonial.name}
              index={index}
              {...testimonial}
          
          />
        ))}
    </div>


    </div>
  )
}

export default SectionWrapper(Feedbacks, "");