/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo, menu, close} from '../assets';


const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle,setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} glass w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
                  
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <Link 
        to="/"
        className="flex items-center gap-2"a
        onClick={() =>{
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className='object-contain w-9 h-9'/>

          <p className= 'text-white text-[18px] font-bold cursor-pointer flex'>ISRO &nbsp;
          <span className='hidden sm:block'> |  Chandrayan 3</span></p>
        </Link>

        <ul className='flex-row hidden gap-10 list-none sm:flex'>
          {navLinks.map((Link) => (
            <li className={`${
              active === Link.title
              ?"text-white"
              : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=> setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>

          ))}

        </ul>

        <div className='flex items-center justify-end flex-1 sm:hidden'>
          <img
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}/>

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 block-gradient absolute top-20 
                            right-0 mx-4 my-2 min-w-[148px] z-10 rounded-xl`}>

        
<ul className='flex items-start justify-end gap-4 list-none'>
          {navLinks.map((Link) => (
            <li className={`${
              active === Link.title
              ?"text-white"
              : "orange-text-gradient"
            } font-poppins text-medium cursor-pointer text-[16px]`}
            onClick={()=> {setToggle(!toggle);
                          setActive(Link.title)}}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>

          ))}

        </ul>
         </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar