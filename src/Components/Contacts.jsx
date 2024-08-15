export default function Contacts(props)
{
    return <div id="cont" className="bg-transparent absolute bottom-2 scale-0 backdrop-blur-xl right-2 z-[99] flex flex-col gap-3 rounded-xl">
        <div onClick={props.click} className='w-[1rem] h-[1rem] sm:w-[1.5rem] sm:h-[1.5rem] cursor-pointer bg-white absolute right-1 top-1 rounded-[50%]' ><img src={require('../Images/close.png')} className='w-[1rem] h-[1rem] sm:w-[1.5rem] sm:h-[1.5rem]'></img></div>
        <div className='flex items-center gap-2'><img src={require('../Images/phone.png')} className='w-[2rem]'></img><p className='text-white text-[1.2rem]'>+91-9844769899</p></div>
        <div className='flex items-center gap-2'><img src={require('../Images/email.png')} className='w-[2rem]'></img><p className='text-white text-[1.2rem]'>rahulrahuln2001@gmail.com</p></div>
        <div className='flex justify-between'>
        <a href="https://www.linkedin.com/in/rahuln-web-developer/"><img src={require('../Images/linkedin.png')} className='w-[2rem]'></img></a>
        <a href="https://www.instagram.com/rahuln577/"><img src={require('../Images/insta.png')} className='w-[2rem]'></img></a>
        <a href="https://github.com/rahuln577"><img src={require('../Images/github.png')} className='w-[2rem]'></img></a>
        </div>
    </div>
}