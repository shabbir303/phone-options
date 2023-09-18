/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */

import Link from "../Link/Link";

import { TfiLayoutMenuV } from 'react-icons/tfi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
const NAVBAR = () => {
    const[open, setOpen] = useState(false);
    
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/dashboard', name: 'Dashboard', id: 5 }
      ];
    return (
        <nav>
            <div onClick={()=>setOpen(!open)}   className="text-[30px] font-medium md:hidden mt-[20px] " >
                {
                  open === false?<TfiLayoutMenuV className="text-[#06764B] "></TfiLayoutMenuV> :<AiOutlineClose className="text-[#E6149D] "></AiOutlineClose>
                }
            
            
            </div>
            <ul className={`flex-row md:flex gap-[30px] bg-[#E614E0] md:mt-[20px] ml-[20px] px-[20px] py-[10px] text-white rounded-lg absolute md:static   duration-1000  ${open?'top-16':'top-[-300px]'} `}>
            {
                routes.map(Singleroute=> <Link route={Singleroute}></Link> )
            }
            </ul>
        </nav>
    );
};

export default NAVBAR;