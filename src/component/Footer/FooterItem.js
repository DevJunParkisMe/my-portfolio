import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
const FooterItem = () => {
  return (
    <div className='w-3/5 h-full flex flex-col justify-center items-center gap-5'>
      <div className='flex text-white text-5xl gap-3'>
        <a href='https://github.com/DevJunParkisMe'><FaGithub /></a>
        <a href='https://www.instagram.com/jbro_befamous/'><FaInstagram /></a>
      </div>
      <div className='text-white flex gap-2'><div className='h-full flex items-center'><FaRegCopyright /></div><span className='font-KNUJin pt-1'>Park Jun Hyeung's Portfolio. All rights reserved.</span></div>
    </div>
  )
}

export default FooterItem
