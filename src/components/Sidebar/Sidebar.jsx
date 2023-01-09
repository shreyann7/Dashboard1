import React from 'react'
import Image from 'next/image'
import { HiHome } from 'react-icons/hi';
import { SidebarData } from "../../Data/Data"
import { CiLogout } from 'react-icons/ci';
import { useState } from 'react';

const Sidebar = () => {
  // Use State Hook
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  return (
    <div className='Sidebar'>
        {/* Heading */}
       <span className='text-4xl font-extrabold'>
          C<span className='clr'>o</span>lors
        </span>
        
        {/* Menu */}
        <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon size={26}/><span>{item.heading}</span>
            </div>
          );
        })}

        <div className="menuItem">
          <CiLogout size={30}/>
          <span>V.1.2.4</span>
        </div>
        
        </div>
    </div>
  )
}

export default Sidebar