import React from 'react'

const ProjectThree = () => {
  return (
    <div className='flex flex-col gap-5 py-10 items-center justify-center w-full h-3/4 bg-white rounded-3xl'  style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
  <div className='text-3xl font-SBAggroB text-center'>COMMENTORIUM<br/><span className='text-lg font-Sejong'>인기있는 게임을 즐기는 유저들을 위한 커뮤니티</span></div>
            <div className='flex w-full h-full gap-10 pl-10'> 
                <div className='flex-1'>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/main.png')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/valo.png')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                    <div className='w-full h-1/3' style={{backgroundImage: "url('img/party.png')", backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}></div>
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className='font-SBAggroB pr-10 text-sm'>  
                        처음으로 진행했던 미니 프로젝트입니다.
                        <br/>
                        PC방 점유율 TOP10에 속한 게임들의 유저들을 위한 커뮤니티 사이트로 기획했습니다. BackEnd를 온전히 맡아 구현하였습니다. 
                        <br/>
                        <br/>
                        자바의 크롤링 라이브러리 <span className='font-bold' style={{color: '#FF33FF'}}>Jsoup을 이용해보았던 프로젝트</span>였습니다. 라이브러리 뿐만 아니라, 기본적인 MVC패턴을 REST API로 만들어 서비스하는 것에 대한 공부를 할 수 있는 프로젝트였으며 <span className='font-bold' style={{color: '#FF33FF'}}>Controller와 Service를 철저히 나누어 각자가 맡은 기능을 온전히 수행</span>할 수 있도록 하였습니다.
                        <br/>
                        <br/>
                        <span className='font-bold' style={{color: '#FF33FF'}}>데이터베이스의 설계에서부터 많은 시간을 들여, 테이블 간 체계를 미리 확립</span>하였습니다. ORM(JPA) 기술을 이용하여 서버에서 DB를 컨트롤 하는 것을 깊게 익힐 수 있었습니다.
                    </div>
                    <div>-----------------------------------------------------------------------------</div>
                    <ul className='w-full pr-16 flex flex-col gap-10'>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>구현 기능</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>10가지 게임 별 코멘트 게시판 구현<br/><br/>함께 게임을 즐기고 싶은 사람들을 위한 파티모집 게시판<br/><br/>실시간 게임 뉴스 확인 및 내 주변 PC방 위치 확인 기능</div>
                        </li>
                        <li className='w-full flex'>
                            <div className='w-1/2 font-SBAggroB'>GitHub</div>
                            <a className='w-1/2 text-sm underline text-left' href="https://github.com/DevJunParkisMe/Commentorium_mini.git">https://github.com/DevJunParkisMe/<br/>Commentorium_mini.git</a>
                        </li>
                        <li className='w-full flex'>
                            <div className='w-1/2 font-SBAggroB'>Demo</div>
                            <a className='w-1/2 text-sm underline text-left' href="https://youtu.be/uUk9ccmmMGg">https://youtu.be/uUk9ccmmMGg</a>
                        </li>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>FrontEnd(FE)</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>React.js, tailwindCSS, React-Hook </div>
                        </li>
                        <li className='w-full flex'>
                            <div className='flex-1 font-SBAggroB'>BackEnd(BE)</div>
                            <div className='flex-1 text-sm font-KNUJin text-left'>SpringBoot, MySQL, JPA</div>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default ProjectThree
