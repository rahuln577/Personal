import c from '../Images/c++.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import mongo from '../Images/mongo.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import html from '../Images/html.png'
import git from '../Images/git.png'
import tailwind from '../Images/tailwind.png'
import { useState } from 'react'

let icons=[css,tailwind,js,html,git,react,mongo,redux]
let projects=[
    {
        name:"Real Estate Marketplace",
        image:require("../Images/realscreen.png"),
        link:"https://realestatebyrahul.netlify.app",
        tools:[tailwind,js,html,git,react,mongo,redux]
    },
    {
        name:"Movies Database",
        image:require("../Images/moviesdb.png"),
        link:"https://moviesdbbyrahul.netlify.app",
        tools:[tailwind,js,html,git,react]
    },
    {
        name:"TechTuneMotors",
        image:require("../Images/techtune.png"),
        link:"https://techtunemotors.netlify.app",
        tools:[tailwind,js,html,git,react]
    }
]


export default function ProjDisp({id})
{

    return <div id="disp" className="scale-0 fixed z-[100] w-[16rem] sm:w-[30rem] pb-[1rem] bg-gray-900 rounded-2xl right-5 top-[10lvh] overflow-hidden">
            <img src={projects[id].image} className='rounded-2xl'></img>
            
            
            <div className='flex flex-wrap gap-3 justify-start w-fit mx-auto mt-3'>
                
                {projects[id].tools.map((value)=><img src={value} className='w-[3rem] h-[3rem]'></img>)}
            </div>
    </div>
}