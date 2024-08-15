import c from '../Images/c++.png'
import css from '../Images/css.png'
import js from '../Images/js.png'
import mongo from '../Images/mongo.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import html from '../Images/html.png'
import git from '../Images/git.png'
import tailwind from '../Images/tailwind.png'
import python from '../Images/python.png'

let values=[{
    name:"C++",
    image:c
},
{
    name:"CSS",
    image:css
},
{
    name:"JavaScript",
    image:js
},
{
    name:"MongoDB",
    image:mongo
},
{
    name:"React",
    image:react
},
{
    name:"Redux",
    image:redux
},
{
    name:"HTML",
    image:html
},
{
    name:"Git",
    image:git
},
{
    name:"TailwindCSS",
    image:tailwind
},
{
    name:"Python",
    image:python
}
]
export default function Skills(props) {
    return <div className="w-[100vw]  h-[100dvh]  scale-0 absolute z-[7]" id="skillbg" onClick={props.click}>
        <div id="skillsec" className=" w-full py-[1rem] bg-black translate-y-[100%] flex flex-wrap justify-center absolute bottom-0 rounded-t-[20px]">
            {values.map((value)=>{
                return <div className='w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem] flex m-[1rem] items-center flex-col'>
                <img src={value.image} className='w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem]'></img>
                <p className='text-gray-200 text-[0.9rem] sm:text-[1.2rem]'>{value.name}</p>
            </div>
            })}
        </div>
    </div>
}