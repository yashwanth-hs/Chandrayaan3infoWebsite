/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Footers = () => {
    const year = new Date().getFullYear();
  
    return <footer className=" blue-text-gradient">
       
        {`Copyright © The Astra | YHS ${year}`}
        <div className="mt-2 mb-0 text-[9px] pink-text-gradient">It's not an official Website | All information and related images are taken from "isro.gov.in" | 3d Model of Vikram and Moon- Source: sketchfab.com | Icons Source: freepik.com</div></footer>;
  };
  
  export default Footers;