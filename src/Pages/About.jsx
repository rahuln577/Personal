export default function About(props)
{
    return <div className='w-full h-[100dvh] absolute bg-black  border-[0] border-white z-[6] scale-0 rounded-[100%] flex justify-center items-center' id="page">
    <div className='w-[90%] overflow-hidden' id="about">
      <h1 className='text-white text-[1.7rem] tracking-wider'>ABOUT ME</h1>
      <p className='text-white tracking-wide text-[1.2rem] sm:text-[1.4rem] my-[1rem]'><li><b>Passionate Web Developer</b>🖥️ with a strong foundation in building stunning and functional websites.</li>
<li><b>Recent Graduate</b> from JSS Academy of Technology 🎓 with a B.Tech in Computer Science.</li>
<li><b>Specializes in MERN Stack </b>🌐 with a commitment to learning and growth.</li>
<li><b>Goal:</b> Create innovative, user-friendly web solutions that have a positive impact 🌟.</li>
<li><b>Interests:</b> Exploring tech trends 📚 and working on personal projects 🎨.</li>
<li><b>Let’s Connect: </b>Open to opportunities to collaborate on amazing projects!</li></p>
      <a href="https://drive.google.com/file/d/1E_MgFZAi40WlL8lrqOfKJ3mypjU-NHhR/view?usp=sharing" className='text-white text-[1rem] cursor-pointer border-[1px] inline-block p-2 rounded-[5px] hover:bg-white hover:text-black'>RESUME</a>
      
    </div>
    <div className='absolute bottom-[7vh] flex w-[100%] justify-center'>
      <button className='text-white  text-[1rem] sm:text-[1.4rem] m-0 cursor-pointer' id="gob" onClick={props.click}>Go Back {">"}</button>
      </div>

  </div>
}