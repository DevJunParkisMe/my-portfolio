import React, { forwardRef } from 'react'
import SkillsItem from './SkillsItem'

const Skills = forwardRef((props,ref) => {
  return (
    <div ref={refundRef => (ref.current[4] = refundRef)} className='w-full h-full flex justify-center bg-green-100'>
        <SkillsItem />
    </div>
  )
})

export default Skills
