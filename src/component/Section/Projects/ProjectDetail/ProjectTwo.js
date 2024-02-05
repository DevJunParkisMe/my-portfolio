import React from 'react'

const ProjectTwo = () => {
  return (
    <div className='flex flex-col gap-5 py-10 items-center justify-center w-full h-3/4 bg-white rounded-3xl'  style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
         <div className='text-3xl font-SBAggroB text-center'>JHPark Portfolio<br/><span className='text-lg font-Sejong'>포트폴리오 웹 사이트</span></div>
            <div className='flex w-full h-full gap-10 pl-10'> 
                <div className='flex-1'>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/portfolioMain.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/portfolioProject.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/port3.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className='font-SBAggroB pr-10 text-sm'>  
                        개발자가 되기 위한 포트폴리오 웹 사이트입니다.
                        <br/>
                        채용 담당자가 원하는 정보를 빠르게 볼 수 있도록 설계하였습니다.
                        <br/>
                        <br/>
                        <span className='font-bold' style={{color: '#FF33FF'}}>Component들의 세분화를 위해 props와 state를 최대한으로 이용</span>하여 반복되는 코드들을 제거하였고, 비효율적으로 코드가 쓰이는 곳이 없도록 하였습니다.
                        <br/>
                        <br/>
                        tailwindCSS로 다양한 웹폰트와 아이콘을 다루는 것에 익숙해질 수 있었습니다. 또한 동적인 웹 페이지를 위한 애니메이션 기능들도 충분히 연습할 수 있었습니다.   
                    </div>
                    <div>-----------------------------------------------------------------------------</div>
                    <ul className='w-full pr-16 flex flex-col gap-10'>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>구현 기능</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>간단한 자기 소개 및 인적 사항<br/><br/>보유한 기술 스택과 프로젝트를 저장했던 아카이브(GitHub) 주소 <br/><br/>진행했던 프로젝트의 개요와 시연 영상</div>
                        </li>
                        <li className='w-full flex'>
                            <div className='w-1/2 font-SBAggroB'>GitHub</div>
                            <a className='w-1/2 text-sm underline text-left' href="https://github.com/DevJunParkisMe/my-portfolio.git">https://github.com/DevJunParkisMe/my-portfolio.git</a>
                        </li>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>FrontEnd(FE)</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>React.js, tailwindCSS, React-Hook</div>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default ProjectTwo
