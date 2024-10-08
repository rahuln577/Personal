

export default function Main(props) {
    return <div className='relative z-[0] w-full h-[100dvh] blac flex justify-center backdrop-blur-md items-center flex-col overflow-hidden'>


        <svg fill="white" width="80vw" height="80vh" viewBox="0 0 24 24" id="圖層_1" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" className='scale-0 absolute'><title>setting</title><path d="M22.36,9.37l-.75-.14a9.89,9.89,0,0,0-.86-2.06l.44-.63A2,2,0,0,0,21,4L20,3a2,2,0,0,0-2.55-.23l-.63.44a9.89,9.89,0,0,0-2.06-.86l-.14-.75a2,2,0,0,0-2-1.64H11.33a2,2,0,0,0-2,1.64l-.14.75a9.89,9.89,0,0,0-2.06.86l-.63-.44A2,2,0,0,0,4,3L3,4a2,2,0,0,0-.23,2.55l.44.63a9.89,9.89,0,0,0-.86,2.06l-.75.14a2,2,0,0,0-1.64,2v1.33a2,2,0,0,0,1.64,2l.75.14a9.89,9.89,0,0,0,.86,2.06l-.44.63A2,2,0,0,0,3,20L4,21a2,2,0,0,0,2.55.23l.63-.44a9.89,9.89,0,0,0,2.06.86l.14.75a2,2,0,0,0,2,1.64h1.33a2,2,0,0,0,2-1.64l.14-.75a9.89,9.89,0,0,0,2.06-.86l.63.44A2,2,0,0,0,20,21L21,20a2,2,0,0,0,.23-2.55l-.44-.63a9.89,9.89,0,0,0,.86-2.06l.75-.14a2,2,0,0,0,1.64-2V11.33A2,2,0,0,0,22.36,9.37ZM22,12.67l-1.38.25a1,1,0,0,0-.8.77,7.93,7.93,0,0,1-1.1,2.64,1,1,0,0,0,0,1.11l.8,1.16-.94.94-1.16-.8a1,1,0,0,0-1.11,0,7.93,7.93,0,0,1-2.64,1.1,1,1,0,0,0-.77.8L12.67,22H11.33l-.25-1.38a1,1,0,0,0-.77-.8,7.93,7.93,0,0,1-2.64-1.1,1,1,0,0,0-1.11,0l-1.16.8-.94-.94.8-1.16a1,1,0,0,0,0-1.11,7.93,7.93,0,0,1-1.1-2.64,1,1,0,0,0-.8-.77L2,12.67V11.33l1.38-.25a1,1,0,0,0,.8-.77,7.93,7.93,0,0,1,1.1-2.64,1,1,0,0,0,0-1.11L4.46,5.4l.94-.94,1.16.8a1,1,0,0,0,1.11,0,7.93,7.93,0,0,1,2.64-1.1,1,1,0,0,0,.77-.8L11.33,2h1.33l.25,1.38a1,1,0,0,0,.77.8,7.93,7.93,0,0,1,2.64,1.1,1,1,0,0,0,1.11,0l1.16-.8.94.94-.8,1.16a1,1,0,0,0,0,1.11,7.93,7.93,0,0,1,1.1,2.64,1,1,0,0,0,.8.77l1.38.25Z" /><path d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" /></svg>
        <div className='w-full flex justify-between fixed top-0'><button className='text-white text-[1.3rem] font-kalam sm:text-[1.8rem] p-[2rem]' onClick={props.clickanim}>About</button><button className='text-white text-[1.3rem] font-kalam sm:text-[1.8rem] p-[2rem]' onClick={props.projclickanim}>Projects</button></div>
        <div className='mx-auto scale-[0.75] overflow-hidden z-[2] flex flex-col justify-center items-center' id="herodiv">
            <p className='text-white text-[15vw] sm:text-[14vw] flex font-semibold overflow-hidden font-kalam' id="hero1" ><span className='mr-[4vw]'>Hi</span><span>there !!</span></p>
            <div className='flex justify-between w-[95%] mx-auto my-[-5vw]' id="skill">
                <p className='text-gray-400 text-[4.5vw] sm:text-[2.5vw] font-kalam'>MERN</p>
                <p className='text-gray-400 text-[4.5vw] sm:text-[2.5vw] font-kalam'>C++</p>
            </div>
            <p className='text-white text-[15vw] sm:text-[14vw] flex items-center justify-center font-semibold font-kalam' id="hero2"><span className='mr-[2vw]'>I</span> <span className='mr-[2vw]'>am</span> <span className='font-kalam mt-[2vw] text-white'>RAHUL</span></p>
        </div>
        <div className='w-full flex justify-between fixed bottom-0'><button className='text-white font-kalam text-[1.3rem] sm:text-[1.8rem] p-[2rem] leading-wider' onClick={props.skillclickanim}>Skills</button><button className='text-white font-kalam text-[1.3rem] sm:text-[1.8rem] p-[2rem]' onClick={props.contclickanim}>Contact</button></div>
    </div>
}