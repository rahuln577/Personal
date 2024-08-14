import c from '../Images/c++.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import mongo from '../Images/mongo.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import html from '../Images/html.png'
import git from '../Images/git.png'
import tailwind from '../Images/tailwind.png'

let icons=[css,tailwind,js,html,git,react,mongo,redux]

export default function ProjDisp()
{
    return <div className="absolute z-[100] w-[16rem] sm:w-[30rem] pb-[1rem] bg-gray-900 rounded-2xl right-5 top-[10lvh] overflow-hidden">
            <video autoPlay="true" loop className='rounded-2xl' muted>
            <source src={require('../Videos/real.mp4')} type="video/mp4"></source>
            </video>
            <p className='text-white m-[1rem] sm:m-[2rem] text-[1.5rem] font-semibold tracking-wider font-fig'>Tools Used:</p>
            <div className='flex flex-wrap gap-3 justify-center w-[95%] mx-auto'>
                
                {icons.map((value)=><img src={value} className='w-[3rem] h-[3rem]'></img>)}
            </div>
    </div>
}