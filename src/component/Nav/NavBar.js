import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'

const NavBar = ({scrollTopValue, scrollRef}) => {
  const [isBackground, setBackground] = useState(false);
  useEffect(() => {
    if (scrollTopValue !== 0) {
      setBackground(true)
    }
    else {
      setBackground(false)
    }
  },[scrollTopValue])
  return (
    <div className={`${isBackground ? 'bg-white text-black' : 'bg-transparent text-gray-300'} fixed justify-center w-full flex p-5 z-40 text-lg font-Orbit`}>
      <NavItem isBackground={isBackground} scrollRef={scrollRef}/>
    </div>
  )
}

export default NavBar
