import React from 'react'
import ProjectOne from './ProjectDetail/ProjectOne'
import ProjectTwo from './ProjectDetail/ProjectTwo'
import ProjectThree from './ProjectDetail/ProjectThree'

const ProjectsItem = () => {
  return (
    <div className='w-3/5 h-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='text-4xl font-SBAggroB'>PROJECTS</div>
      <div className='w-full h-full flex flex-col gap-5'>
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </div>
    </div>
  )
}

export default ProjectsItem
