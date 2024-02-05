import React from 'react'
import { GoCheck } from "react-icons/go";
const ArchivingItem = () => {
  return (
    <div className='w-3/5 h-full flex flex-col items-center justify-center gap-10'>
        <div className='text-4xl font-SBAggroB'>ARCHIVING</div>
        <div className='w-full h-3/4 bg-black rounded-3xl flex justify-center items-center'  style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
            <div className='h-3/4 bg-white rounded-3xl' style={{width: '90%'}}>
                <div className='w-full h-24' style={{backgroundImage:"url('img/github.jpeg')", backgroundSize:'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                <ul className='font-Orbit font-semibold flex flex-col items-center gap-2'>
                    <li className='flex items-center gap-3'>
                        <span className='text-green-500'><GoCheck /></span>
                        <div>
                            <a className='underline' href='https://github.com/DevJunParkisMe'>https://github.com/DevJunParkisMe</a>
                        </div>    
                    </li>
                    <li className='flex items-center gap-3'>
                        <span className='text-green-500'><GoCheck /></span>
                        <div>K-digital 과정 중 수행했던 프로젝트 코드</div>
                    </li>
                    <li className='flex items-center gap-3'>
                        <span className='text-green-500'><GoCheck /></span>
                        <div>배운 내용을 바탕으로 혼자서 만들어봤던 코드</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ArchivingItem
