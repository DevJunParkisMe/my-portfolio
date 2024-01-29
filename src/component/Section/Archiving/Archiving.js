import React, { forwardRef } from 'react'
import ArchivingItem from './ArchivingItem'

const Archiving = forwardRef((prop,ref) => {
  return (
    <div ref={refundRef => (ref.current[2] = refundRef)} className='w-full h-3/5 flex justify-center bg-indigo-200 py-20'>
      <ArchivingItem />
    </div>
  )
})

export default Archiving
