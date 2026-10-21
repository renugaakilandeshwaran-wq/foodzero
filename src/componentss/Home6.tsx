import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import sweet from "../assets/sweet.png";
import spice from "../assets/spice.png";
import soups from "../assets/soups.png";
import profile3 from "../assets/profile3.png";
import { RiDoubleQuotesR } from "react-icons/ri";


function Home6() {
    return (
        <div className="py-10 lg:py-20 px-4">
            <div>
                <h1 className="text-3xl lg:text-6xl font-semibold text-center">Calories Energy Balance</h1>
                <h2 className="text-center text-sm lg:text-base py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5 items-center justify-center py-15 lg:gap-10">
                <div className="relative">
                    <img src={sweet} alt="" className="lg:h-full h-82 w-full object-cover" />
                    <div className="absolute top-2 w-full">
                        <div className="flex justify-between items-center px-4">
                            <h1 className="text-3xl font-bold">Starters</h1>
                            <FiArrowRight className="text-2xl font-bold" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={spice} alt="" className="lg:h-full h-82 w-full object-cover" />
                    <div className="absolute top-2 w-full">
                        <div className="flex justify-between items-center px-4">
                            <h1 className="text-3xl font-bold">Mains</h1>
                            <div>
                                <FiArrowRight className="text-2xl font-bold" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={soups} alt="" className="lg:h-145 object-cover" />
                    <div className="absolute top-2 w-full">
                        <div className="flex justify-between items-center px-4">
                            <h1 className="text-3xl font-bold">Soups</h1>
                            <FiArrowRight className="text-2xl font-bold" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative ">
                <p className="lg:text-4xl relative z-10 font-semibold text-0 px-8 lg:px-20">
                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus lorem id penatibus imperdiet.
                    Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.
                </p>
                <div className="absolute lg:-top-5 top-0 right-0 lg:-right- z-0">
                    <RiDoubleQuotesR className="text-[#EBF0E4] " size={170} />
                </div>
            </div>
            <div className="py-15 grid lg:flex items-center gap-5 justify-center lg:justify-between">
                <div className="flex gap-4 items-center">
                    <img src={profile3} alt="" className="w-32 h-32 rounded-full" />
                    <div>
                        <h1 className="text-2xl font-bold">John Doe</h1>
                        <h2 className="text-sm text-gray-400">Bloger</h2>
                    </div>
                </div>
                <div className="flex gap-3 items-center justify-center">
                    <FiArrowRight className="text-4xl" />
                    <h1 className="text-xs">2/ <span className="font-bold text-2xl">3</span></h1>
                    <FiArrowLeft className="text-4xl" />
                </div>
            </div>
        </div >
    )
}

export default Home6;