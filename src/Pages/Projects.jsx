import ProjDisp from "../Components/ProjDisp"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useState } from "react"
export default function Projects(props) {
    let [blur,setblur]=useState([false,false,false])
    let [id, setid] = useState(0)
    function hover(id) {
        setid(id)
        setblur((prev)=>{
            return prev.map((value,index)=>{
                if(id==index)return false
                return true
            })
        })
        gsap.to("#disp", {
            scale: 1,
            duration: 0.2,
            ease: 'power4.out'
        })
    }
    function hover2() {
        setblur((prev)=>{
            return prev.map((value,index)=>{
            return false
                
            })
        })
        gsap.to("#disp", {
            scale: 0,
            duration: 0.2,
            ease: 'power4.out'
        })
    }
    return <div id="proj" className="bg-black w-full h-[100dvh] scale-0 absolute z-[99] overflow-y-scroll rounded-[100%] flex flex-col justify-center sm:justify-start">
        <div className="scale-1 fixed z-[99] min-h-[18rem] sm:min-h-[23rem] w-[16rem] sm:w-[30rem] pb-[1rem] bg-transparent rounded-2xl right-5 top-[10lvh] overflow-hidden"></div>


        <ProjDisp id={id} image={props.image}/>
        <div className="w-[90%] mx-auto flex flex-col justify-center">
            <div className={`py-[1.2rem] md:py-[1.5rem] px-2 border-b-[0.5px] border-b-gray-800 w-full ${blur[0]?"blur-sm":""}`} onMouseOver={() => hover(0)} onMouseLeave={hover2}>
                <p className="text-white text-nowrap font-kalam font-light text-[1.7rem] md:text-[3rem]" >Real Estate Marketplace</p>
            </div>

            <div className={`py-[1.2rem] md:py-[1.5rem] px-2 border-b-[0.5px] border-b-gray-800 w-full ${blur[1]?"blur-sm":""}`} onMouseOver={() => hover(1)} onMouseLeave={hover2}>
                <p className="text-white text-nowrap font-kalam font-light text-[1.7rem] md:text-[3rem]" >Movies Database</p>
            </div>

            <div className={`py-[1.2rem] md:py-[1.5rem] px-2 border-b-[0.5px] border-b-gray-800 w-full ${blur[2]?"blur-sm":""}`} onMouseOver={() => hover(2)} onMouseLeave={hover2}>
                <p className="text-white text-nowrap font-kalam font-light text-[1.7rem] md:text-[3rem]" >TechTune Motors</p>
            </div>


        </div>
        <p className="text-white text-[0.8rem] mx-[2rem] block sm:hidden">Click on them</p>
        <div className='absolute bottom-[7vh] flex w-[100%] justify-center'>
            <div className='text-white  text-[1rem] sm:text-[1.4rem] m-0 cursor-pointer font-kalam' id="go" onClick={props.click}>Go Back {">"}</div>
        </div>
    </div>
}