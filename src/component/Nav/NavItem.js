import React, { useEffect, useRef, useState } from 'react';

const NavItem = ({ isBackground, scrollRef }) => {
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);
  const DETAIL_NAV = [
    { idx: 0, name: 'JHPark Portfolio' },
    { idx: 1, name: 'About Me' },
    { idx: 2, name: 'Archiving' },
    { idx: 3, name: 'Projects' },
    { idx: 4, name: 'Skills' },
  ];
  useEffect(() => {
    // { behavior: 'smooth' } 속성을 주면 스크롤이 스르륵~ 올라가거나 내려가면서 이동하고, 없으면 아무 애니메이션 없이 바로 목적지를 보여준다.
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
    setNavIndex(null);
    console.log(scrollRef, 'scrollRef')
  }, [scrollRef, navIndex]);
  // 인덱스 0번째 요소를 배열에서 제외
  const otherNavs = DETAIL_NAV.slice(1);

  return (
    <div className='w-3/5 flex justify-between'>
      <div
        className={`cursor-pointer ${isBackground ? 'hover:text-green-400' : 'hover:text-white'}`}
        ref={ref => (navRef.current[0] = ref)}
        onClick={() => {
          setNavIndex(0);
        }}
      >
        {DETAIL_NAV[0].name}
      </div>
      <div className='flex gap-10'>
        {otherNavs.map(({ idx, name }) => (
          <div
            className={`cursor-pointer ${isBackground ? 'hover:text-green-400' : 'hover:text-white'}`}
            key={idx}
            ref={ref => (navRef.current[idx] = ref)}
            onClick={() => {
              setNavIndex(idx);
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
