import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {useEffect,useState} from 'react'
import About from './Pages/About';
import './App.css';
import Main from './Pages/Main';
import Images from './Pages/Images';
import Projects from './Pages/Projects';

function App() {
  let flag=true
  let tl1 = gsap.timeline({paused:true})
  function aboutpage()
  {
    tl1.to("#herodiv", {
      opacity: 0,
      x: 200,
      duration: 0.7
    })
    tl1.to("svg", {
      scale: 0.5,
      rotate: 360,
      delay: -0.6,
      duration: 0.9
    })
  
    tl1.to("#page", {
      scale: 1,
      borderRadius: 0,
      duration: 0.5
    })
    tl1.to("#page", {
      border: "0px",
      duration: 1
    })
    
    tl1.from("#gob",{
      opacity:0,
      duration:0.1
    })
  }
  useEffect(()=>{
    let interval=setInterval(()=>{
      gsap.to("#cpp", {
        x: gsap.utils.random(0, window.innerWidth, 1),
        y:gsap.utils.random(0, window.innerHeight, 1),
        ease:'none',
        duration:2
      });
      gsap.to("#redux", {
        x: gsap.utils.random(0, window.innerWidth, 1),
        y:gsap.utils.random(0, window.innerHeight, 1),
        ease:'none',
        duration:2
      });
      gsap.to("#react", {
        x: gsap.utils.random(0, window.innerWidth, 1),
        y:gsap.utils.random(0, window.innerHeight, 1),
        ease:'none',
        duration:2
      });
      gsap.to("#js", {
        x: gsap.utils.random(0, window.innerWidth, 1),
        y:gsap.utils.random(0, window.innerHeight, 1),
        ease:'none',
        duration:2
      });
      gsap.to("#css", {
        x: gsap.utils.random(0, window.innerWidth, 1),
        y:gsap.utils.random(0, window.innerHeight, 1),
        ease:'none',
        duration:2
      });
      gsap.to("#mongo", {
        x: gsap.utils.random(0, window.innerWidth, 1),
        y:gsap.utils.random(0, window.innerHeight, 1),
        ease:'none',
        duration:2
      });
      gsap.to("#python", {
        x: gsap.utils.random(0, window.innerWidth, 1),
        y:gsap.utils.random(0, window.innerHeight, 1),
        ease:'none',
        duration:2
      });

      return ()=>clearInterval(interval)
    },2000)
    
  },[])
  function clickanim() {
    console.log("hi")
    if(flag){
      console.log(flag)
      flag=false
      tl1.play()
    }
    else{
      console.log(flag)
      flag=true
      tl1.reverse(1.5)
    }
  }
  useGSAP(() => {
    
    aboutpage()
   
    let tl = gsap.timeline()
    tl.from("#hero1 span", {
      y: 200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl.from("#hero2 span", {
      y: 200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl.from("#skill p", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.3
    })
    tl.to("#herodiv", {
      scale: 1,
      duration: 0.5,
      delay: -1.5
    })
    tl.from("button", {
      opacity: 0,
      x: -100,
      duration: 0.4,
      stagger: 0.2
    })


  })
  return (
    <div className='overflow-hidden w-[100vw] h-[100vh] relative '>
      <Images/>
      <About click={clickanim}/>
      <Projects/>
      <Main clickanim={clickanim}/>
    </div>
  );
}

export default App;
