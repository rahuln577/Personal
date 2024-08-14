import ProjDisp from "../Components/ProjDisp"
export default function Projects()
{
    return <div className="bg-black w-full h-[100dvh] scale-1 absolute z-[99]">
        <ProjDisp/>
        <div className="w-[96%] sm:w-[90%] mx-auto flex flex-row">
            <div className="py-[3rem] px-2 border-b-[2px] border-b-white w-full">
                <p className="text-white font-fig font-semibold text-[7vw] sm:text-[2.5rem] tracking-wider">Real Estate Marketplace</p>
            </div>
        </div>
    </div>
}