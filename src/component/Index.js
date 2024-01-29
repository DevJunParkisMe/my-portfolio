import React, { useEffect, useRef, useState } from 'react'
import Main from './Section/Main/Main'
import NavBar from './Nav/NavBar'
import AboutMe from './Section/AboutMe/AboutMe'
import Skills from './Section/Skills/Skills'
import Archiving from './Section/Archiving/Archiving'
import Projects from './Section/Projects/Projects'
import Footer from './Footer/Footer'

const Index = () => {
  const ref = useRef();
  const [scrollTopValue, setScrollTop] = useState(0);
  const scrollRef = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤시 추가로 원하는 로직을 여기에 추가할 수 있습니다.
      setScrollTop(ref.current.scrollTop)
    };

    // 이벤트 리스너를 ref의 current 속성에 추가합니다.
    ref.current.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => {
      ref.current.removeEventListener('scroll', handleScroll);
    };
    
  }, []); // 빈 배열은 이 효과가 마운트될 때 한 번만 실행됨을 의미합니다.
  return (
    <div ref={ref} className='w-full h-full overflow-y-auto'>
        <NavBar scrollTopValue={scrollTopValue} scrollRef={scrollRef}/>
        <Main  ref={scrollRef}/>
        <AboutMe ref={scrollRef}/>
        <Archiving ref={scrollRef}/>
        <Projects ref={scrollRef}/>
        <Skills ref={scrollRef}/>
        <Footer/>
       
    </div>
  )
}

export default Index
