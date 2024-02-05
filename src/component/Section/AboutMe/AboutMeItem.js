import React from 'react'
import { FaUser } from "react-icons/fa"
import { IoCalendarSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const AboutMeItem = () => {
  return (
    <div className='w-3/5 h-full flex flex-col justify-center items-center gap-20'>
      <div className='text-4xl font-SBAggroB'>ABOUT ME</div>
      <div className='grid grid-cols-2 w-full gap-20'>
        <div className='pl-48 flex items-center gap-5'>
            <div className='text-4xl'><FaUser /></div>
            <div className='text-left'>
                <div className='font-SBAggroB text-xl'>이름</div>
                <div className='font-Orbit text-gray-600 text-lg'>박준형</div>
            </div>
        </div>
        <div className='pl-48 flex items-center gap-5'>
            <div className='text-4xl'><IoCalendarSharp /></div>
            <div className='text-left'>
                <div className='font-SBAggroB text-xl'>생년월일</div>
                <div className='font-Orbit text-gray-600 text-lg'>1992.05.02</div>
            </div>
        </div>
        <div className='pl-48 flex items-center gap-5'>
            <div className='text-4xl'><FaPhone /></div>
            <div className='text-left'>
                <div className='font-SBAggroB text-xl'>연락처</div>
                <div className='font-Orbit text-gray-600 text-lg'>010-4184-2889</div>
            </div>
        </div>
        <div className='pl-48 flex items-center gap-5'>
            <div className='text-4xl'><IoMdMail /></div>
            <div className='text-left'>
                <div className='font-SBAggroB text-xl'>이메일</div>
                <div className='font-Orbit text-gray-600 text-lg'>dev.jhpark2888@gmail.com</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeItem
