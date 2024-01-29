import React, { forwardRef } from 'react'
import ProjectsItem from './ProjectsItem'

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={refundRef => (ref.current[3] = refundRef)} className='w-full bg-cyan-300 flex justify-center' style={{height: '300%'}}>
        <ProjectsItem />
    </div>
  )
})

export default Projects
