import {useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {styles} from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm({...form, [name]:value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();   
    setLoading(true);

    emailjs.send('service_eb288ai', 'template_yi1uo2t',
      {
        from_name: form.name,
        to_name: 'Yashwanth H S',
        from_email: form.email,
        to_email: 'yashuhs2021@gmail.com',
        message: form.message
      },
    'XD0RfHOw2f2ViWQx3')

    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');


      setForm({
        name:'',
        email:'',
        message:''
      })
    }, (error) => {
      setLoading(false)

      console.log(error);

      alert('Something Went Wrong!!!')
    })
  }
  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>


        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className='flex-[0.75] bg-slate-950 p-8 rounded-2xl'>
            
            <p className={styles.sectionSubText}> Tell what you feel </p>
            <h3 className={styles.sectionHeadText}> Comment.</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-8 mt-12'
            >
                <label className='flex flex-col'>
                    <span className='font-medium green-text-gradient md-4'>
                      Your Name
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="what's your name?"
                      className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-green-400 placeholder:text-opacity-60'
                    />
                </label>

                <label className='flex flex-col'>
                    <span className='font-medium green-text-gradient md-4'>
                      Your Email
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="what's your email?"
                      className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-green-400 placeholder:text-opacity-60'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='font-medium green-text-gradient md-4'>
                      Your Comment
                    </span>

                    <textarea
                      rows="7"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="what do you want to say?"
                      className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-green-400 placeholder:text-opacity-60'
                    />
                </label>

                <button
                type='submit'
                  className='px-8 py-3 font-bold text-white shadow-md outline-none rounded-xl bg-tertiary w-fit shadow-primary'
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
          </motion.div>




          <motion.div
            variants={slideIn('right', "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'       
          >
             <EarthCanvas />
          </motion.div>


          <div className='absolute flex items-center justify-center w-full xs:bottom-10 bottom-32'>
              <a href='#about'>
                  <div className='w-[35px] h-[54px] rounded-3xl border-4 border-secondary
                  flex justify-center items-start p-2'>
                      <motion.dev
                        animate={{
                          y:[0, 18, 0]
                         }}
                         transition={{
                          duration:1.5,
                          repeat: Infinity,
                          repeatType: 'loop'
                         }}

                         className="w-3 h-3 mb-1 rounded-full bg-secondary"
                      />
                  </div>
              </a>
        </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");