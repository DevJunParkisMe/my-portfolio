import React, { forwardRef, useEffect, useRef } from 'react'
import AboutMeItem from './AboutMeItem'

const AboutMe = forwardRef((props, ref) => {
  return (
    <div ref={refundRef => (ref.current[1] = refundRef)} className='w-full h-1/2 flex justify-center'>
      <AboutMeItem />
    </div>
  )
});

export default AboutMe