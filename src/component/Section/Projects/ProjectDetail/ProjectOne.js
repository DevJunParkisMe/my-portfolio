import React from 'react'

const ProjectOne = () => {
  return (
    <div className='flex flex-col gap-10 py-10 items-center justify-center w-full h-3/4 bg-white rounded-3xl'  style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
            <div className='text-3xl font-SBAggroB text-center'>FitYou<br/><span className='text-lg font-Sejong'>판매 데이터를 분석하여 의류를 추천하는 서비스</span></div>
            <div className='flex w-full h-full gap-10 pl-10'> 
                <div className='flex-1'>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/MAINPage.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/CoordiPage.PNG')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/Style2_시연.gif')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className='font-SBAggroB pr-10 text-sm'>  
                        특정 의류 기업과의 연계로 진행한 프로젝트였습니다. 
                        <br/>
                        17년 ~ 22년 까지의 의류 판매 데이터를 이용하여 <span className='font-bold' style={{color: '#FF33FF'}}>고객의 니즈(needs)에 맞는 의류를 추천</span>해주는 서비스입니다. 저처럼 옷을 고르는 것이 쉽지 않은 분들께 도움이 되고자 본 서비스를 구현해 보았습니다.
                        <br/>
                        <br/>
                        기업과 연계하여 진행한 큰 프로젝트의 FrontEnd를 온전히 도맡아서 진행했다는 것에서 큰 자부심을 느꼈던 프로젝트였으며, 본 프로젝트를 통해 <span className='font-bold' style={{color: '#FF33FF'}}>React Component 설계하는 것과 다양한 Library를 효율적으로 사용하는 것</span>에 있어서 자신감이 생겼습니다.
                        <br/>
                        <br/>
                        또 <span className='font-bold' style={{color: '#FF33FF'}}>TailwindCSS</span>로 모든 CSS 작업을 진행하면서 해당 기능을 완벽히 이용할 수 있게 된 것 같다고 자신있게 얘기할 수 있게 되었습니다.    
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
  )
}

export default ProjectOne
