import React from 'react'

const ProjectsItem = () => {
  return (
    <div className='w-3/5 h-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='text-4xl font-SBAggroB'>PROJECTS</div>
      <div className='w-full h-full flex flex-col gap-5'>
        <div className='flex flex-col gap-10 py-10 items-center justify-center w-full h-3/4 bg-white rounded-3xl'  style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
            <div className='text-3xl font-SBAggroB text-center'>FitYou<br/><span className='text-lg font-Sejong'>판매 데이터를 분석하여 의류를 추천하는 서비스</span></div>
            <div className='flex w-full h-full gap-10 pl-10'> 
                <div className='flex-1'>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/MAINPage.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/CoordiPage.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/Style2_시연.gif')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className='font-IntelOne pr-10 text-sm'>  
                        특정 의류 기업과의 연계로 진행한 프로젝트였습니다. 
                        <br/>
                        <span className='font-bold'>17년 ~ 22년 까지의 의류 판매 데이터를 이용하여 고객의 니즈(needs)에 맞는 의류를 추천해주는 서비스</span>입니다. 저처럼 옷을 고르는 것이 쉽지 않은 분들께 도움이 되고자 본 서비스를 구현해 보았습니다.
                        <br/>
                        <br/>
                        기업과 연계하여 진행한 큰 프로젝트의 FrontEnd를 온전히 도맡아서 진행했다는 것에서 큰 자부심을 느꼈던 프로젝트였으며, <span className='font-bold'>본 프로젝트를 통해 React Component 설계하는 것과 다양한 Library를 효율적으로 사용하는 것에 있어서 자신감</span>이 생겼습니다.
                        <br/>
                        <br/>
                        또 <span className='font-bold'>TailwindCSS</span>로 모든 CSS 작업을 진행하면서 해당 기능을 완벽히 이용할 수 있게 된 것 같다고 자신있게 얘기할 수 있게 되었습니다.    
                    </div>
                    <div>-----------------------------------------------------------------------------</div>
                    <ul className='w-full pr-16 flex flex-col gap-10'>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>구현 기능</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>회원 가입 시 고객번호가 존재하지 않으면 선호하는 스타일을 고를 수 있음(넷플릭스와 유사)<br/><br/>고객번호가 있을 경우 구매 목록의 의류 이미지를 학습시켜 유사한 제품 추천하기 <br/><br/>아우터와 상하의를 눈으로 볼 수 있는 코디 시뮬레이션 기능 등</div>
                        </li>
                        <li className='w-full flex'>
                            <div className='w-1/2 font-SBAggroB'>GitHub</div>
                            <a className='w-1/2 text-sm underline text-left' href="https://github.com/DevJunParkisMe/project-final-fityou.git">https://github.com/DevJunParkisMe/project-final-fityou.git</a>
                        </li>
                        <li className='w-full flex'>
                            <div className='w-1/2 font-SBAggroB'>Demo</div>
                            <a className='w-1/2 text-sm underline text-left' href="https://youtu.be/T0xWFg3Wxlc">https://youtu.be/T0xWFg3Wxlc</a>
                        </li>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>FrontEnd(FE)</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>React.js, tailwindCSS, React-Spring, React-Hook </div>
                        </li>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>BackEnd(BE)</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>SpringBoot, MySQL, JPA</div>
                        </li>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>DataAnalysis(DA)</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>Python, Flask, u2Net, ResNet, AutoEncoder</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-5 py-10 items-center justify-center w-full h-3/4 bg-white rounded-3xl'  style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
         <div className='text-3xl font-SBAggroB text-center'>JHPark Portfolio<br/><span className='text-lg font-Sejong'>포트폴리오 웹 사이트</span></div>
            <div className='flex w-full h-full gap-10 pl-10'> 
                <div className='flex-1'>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/portfolioMain.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/portfolioProject.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/port3.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className='font-IntelOne pr-10 text-sm'>  
                        개발자가 되기 위한 포트폴리오 웹 사이트입니다.
                        <br/>
                        채용 담당자가 원하는 정보를 빠르게 볼 수 있도록 설계하였습니다.
                        <br/>
                        <br/>
                        <span className='font-bold'>Component들의 세분화를 위해 props와 state를 최대한으로 이용하여 반복되는 코드들을 제거</span>하였고, 비효율적으로 코드가 쓰이는 곳이 없도록 하였습니다.
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
                            <a className='w-1/2 text-sm underline text-left' href="https://github.com/DevJunParkisMe/project-final-fityou.git">https://github.com/DevJunParkisMe/project-final-fityou.git</a>
                        </li>
                        <li className='w-full flex'>
                            <div className='w-1/2 font-SBAggroB'>Demo</div>
                            <a className='w-1/2 text-sm underline text-left' href="https://youtu.be/T0xWFg3Wxlc">https://youtu.be/T0xWFg3Wxlc</a>
                        </li>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>FrontEnd(FE)</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>React.js, tailwindCSS, React-Hook</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-5 py-10 items-center justify-center w-full h-3/4 bg-white rounded-3xl'  style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>

        </div>
      </div>
    </div>
  )
}

export default ProjectsItem
