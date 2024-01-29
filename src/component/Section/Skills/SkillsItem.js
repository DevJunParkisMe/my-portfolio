import React from 'react'

const SkillsItem = () => {
  return (
    <div className='w-3/5 h-full flex flex-col gap-10 items-center justify-center py-10 '>
        <div className='text-4xl font-SBAggroB'>SKILLS</div>
        <div className='w-full h-5/6 flex gap-10'>
            <div className='frontEnd w-1/3 h-full bg-white flex flex-col justify-center items-center rounded-3xl p-3 gap-2' style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
                <div className='text-2xl font-SBAggroB mt-2 mb-5'>FrontEnd</div>
                <div className='w-full h-auto flex gap-2'>
                    <div className='w-1/3 h-40' style={{backgroundImage: "url('img/html.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat',backgroundPosition: 'center'}}></div>
                    <div className='w-1/3 h-40' style={{backgroundImage: "url('img/css.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                    <div className='w-1/3 h-40' style={{backgroundImage: "url('img/js.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
                <div className='w-full h-32' style={{backgroundImage: "url('img/react.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-32' style={{backgroundImage: "url('img/tailwind.jpeg')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-32' style={{backgroundImage: "url('img/reacthook.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-32' style={{backgroundImage: "url('img/reactspring.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat',backgroundPosition: 'center'}}></div>
                <div className='w-full h-32' style={{backgroundImage: "url('img/nextjs.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
            </div>
   
            <div className='backEnd w-1/3 h-full bg-white rounded-3xl flex flex-col justify-center items-center p-3 gap-2' style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
                <div className='text-2xl font-SBAggroB mt-2 mb-5'>BackEnd</div>
                <div className='w-full h-44' style={{backgroundImage: "url('img/springboot.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat',backgroundPosition: 'center'}}></div>
                <div className='w-full h-44' style={{backgroundImage: "url('img/jsp.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-44' style={{backgroundImage: "url('img/jpa.jpg')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-44' style={{backgroundImage: "url('img/mysql.jpg')",backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-44' style={{backgroundImage: "url('img/flask.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-44' style={{backgroundImage: "url('img/python.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                <div className='w-full h-44' style={{backgroundImage: "url('img/firebase.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
            </div>
 
            <div className='w-1/3 h-full flex flex-col gap-5'>
                <div className='deployment w-full h-1/3 bg-white rounded-3xl flex flex-col justify-center items-center p-3 ' style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
                    <div className='text-2xl font-SBAggroB mt-1 mb-2'>Deployment</div>
                    <div className='w-full h-44' style={{backgroundImage: "url('img/vercel.jpg')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                    <div className='w-full h-44' style={{backgroundImage: "url('img/github_actions.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
                <div className='VersionControl w-full h-1/3 bg-white rounded-3xl flex flex-col justify-center items-center p-3 gap-2' style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
                    <div className='text-2xl font-SBAggroB mt-1'>Version</div>
                    <div className='w-full h-36' style={{backgroundImage: "url('img/github.jpeg')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                    <div className='w-full h-36' style={{backgroundImage: "url('img/git.jpg')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
                <div className='communication w-full h-1/3 bg-white rounded-3xl flex flex-col justify-center items-center p-3 gap-2' style={{boxShadow: '10px 10px 0 0 rgba(0,0,0,0.1)'}}>
                    <div className='text-2xl font-SBAggroB mt-1'>Communication</div>
                    <div className='w-full h-28' style={{backgroundImage: "url('img/notion.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                    <div className='w-full h-28' style={{backgroundImage: "url('img/figma.png')", backgroundSize: 'contain', backgroundRepeat:'no-repeat', backgroundPosition: 'center'}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsItem
