import React, { forwardRef } from 'react'
import MainItem from './MainItem'

const Main = forwardRef((prop,ref) => {
  return (
    <div ref={refundRef => (ref.current[0] = refundRef)} className='relative w-full h-3/4 text-white' style={{backgroundImage: "url('img/MainImage.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='cover absolute w-full h-full bg-black opacity-50 z-5'></div>
        <MainItem />
    </div>
  )
})

export default Main
