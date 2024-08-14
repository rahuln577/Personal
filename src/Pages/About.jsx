export default function About(props)
{
    return <div className='w-full h-[100dvh] absolute bg-black  border-[0] border-white z-[6] scale-0 rounded-[100%] flex justify-center items-center' id="page">
    <div className='w-[90%] overflow-hidden' id="about">
      <h1 className='text-white text-[1.7rem] tracking-wider'>ABOUT ME</h1>
      <p className='text-white text-[1rem] sm:text-[1.2rem] my-[1rem]'>I’m a passionate and enthusiastic Web Developer 🖥️ with a strong foundation in creating stunning and functional websites. I recently graduated from JSS Academy of Technology 🎓 with a degree in B.Tech Computer Science and am excited to start my journey in the tech industry 🚀.

        I specialize in MERN stack 🌐 and am eager to learn and grow with every new project. My goal is to build innovative and user-friendly web solutions that make a positive impact 🌟.

        When I'm not coding, you might find me exploring new tech trends 📚, working on personal projects 🎨. Let’s connect and see how we can create something amazing together!</p>
      <a href="#" className='text-white text-[1rem] cursor-pointer border-[1px] inline-block p-2 rounded-[5px]'>RESUME</a>
      
    </div>
    <div className='absolute bottom-[7vh] flex w-[100%] justify-center'>
      <button className='text-white  text-[1rem] sm:text-[1.4rem] underline m-0 cursor-pointer' id="gob" onClick={props.click}>Go Back {">"}</button>
      </div>

  </div>
}