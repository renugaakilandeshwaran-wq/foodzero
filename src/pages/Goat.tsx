import { FaArrowLeft, FaSearch } from "react-icons/fa";
import papaya from "../assets/papaya.png";
import profile1 from "../assets/profile1.png";
import brokli from "../assets/brokli.png";
import onion from "../assets/onion.png";
import fash5 from "../assets/fash5.png";
import fash1 from "../assets/fash1.png";
import fash2 from "../assets/fash2.png";
import fash4 from "../assets/fash4.png";
import pomo from "../assets/pomo.png";
import profile2 from "../assets/profile2.png";


import { RiDoubleQuotesR } from "react-icons/ri";

const tags = [
    {
        id: 1,
        name: "Design"
    },
    {
        id: 2,
        name: "Photography"
    },
    {
        id: 3,
        name: "Images"
    },
    {
        id: 4,
        name: "Videos"
    },
    {
        id: 5,
        name: "Music"
    },
    {
        id: 6,
        name: "Travel"
    }
]

function Goat() {
    return (
        <main className="max-w-7xl mx-auto ">
            <div className="h-screen bg-cover bg-no-repeat relative" style={{ backgroundImage: `url(${papaya})` }}>
                <div className="absolute bg-black/50 inset-0">
                    <div className="absolute lg:top-50 top-50 lg:px-20 text-white">
                        <div className="max-w-7xl mx-auto text-center pb-10">
                            <button className="border border-1 text-white px-10  py-2">Fashion</button>
                        </div>
                        <h1 className="lg:text-7xl font-mono text-2xl px-4 lg:px-0 font-bold text-center ">
                            Three Ideas for Cooking Goat Meat at Home
                        </h1>
                        <div className="flex gap-5 items-center justify-center text-xs mt-5 lg:mt-10 lg:text-xl">
                            <img src={profile1} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                            <h1 className="text-[10px] lg:text-base">Julie Christie</h1>
                            <h1 className="text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                            <h1 className="text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                            <h1 className="text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 grid lg:grid-cols-[4fr_2fr] mx-aut0 px-10 lg:px-4 gap-5 lg:gap-10 items-start justify-center ">
                <div>
                    <div className="flex gap-2 max-w-7xl mx-auto px-0 lg:px-4 lg:text-xl text-xs">
                        <h1 className="text-gray-400">Home/</h1>
                        <h1 className="text-gray-400">Blog/</h1>
                        <h1>Three Ideas for Cooking Goat Meat at Home</h1>
                    </div>
                    <div>
                        <p className="mt-5 lg:mt-10 px-2 lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Purus lorem id penatibus imperdiet. Turpis egestas ultricies
                            purus auctor tincidunt lacus nunc. Convallis pellentesque quis
                            fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
                            imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                        </p>
                    </div>
                    <div className="grid grid-cols-[3fr_1fr] lg:gap-5 mt-10 w-fit lg:w-full items-center justify-center">
                        <img src={brokli} alt="" className="object-cover lg:w-full  w-52 h-50 lg:h-150" />
                        <div className="grid gap-5 gap- items-center justify-center ">
                            <img src={onion} alt="" className="lg:w-62 lg:h-72 w-32 h-22" />
                            <img src={fash5} alt="" className="lg:w-62 lg:h-72 w-32 h-22" />
                        </div>
                    </div>
                    <div>
                        <p className="mt-5 mt-10">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Purus lorem id penatibus imperdiet.
                            Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                            Convallis pellentesque quis
                            fringilla sagittis. Egestas in risus sit nunc
                            nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit</p>
                    </div>
                    <div className="relative py-10 lg:py-20 ">
                        <p className="lg:text-2xl relative text-[#5E6600] z-10 font-semibold text-0 px-8 lg:px-20">
                            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Purus lorem id penatibus imperdiet.
                            Turpis egestas ultricies purus  Lorem ipsum dolor sit amet.
                        </p>
                        <div className="absolute lg:top-8 top-0 right-15 lg:-right- z-0">
                            <RiDoubleQuotesR className="text-[#EBF0E4] " size={180} />
                        </div>
                    </div>
                    <div>
                        <p className="pb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Purus lorem id penatibus imperdiet. Turpis egestas
                            ultricies purus auctor tincidunt lacus nunc. Convallis
                            pellentesque quis fringilla sagittis. Egestas in risus
                            sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Purus lorem id
                            penatibus imperdiet. Turpis egestas ultricies purus auctor
                            tincidunt lacus nunc. Convallis pellentesque quis fringilla
                            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Purus lorem id penatibus imperdiet.
                        </p>
                    </div>
                    <div className="block lg:hidden py-4">
                        <h1 className="text-xl  font-bold">Tages:</h1>

                    </div>
                    <div className="lg:flex grid grid-cols-3 items-center justify-center gap-3">
                        <h1 className="text-xl hidden lg:block font-bold">Tages:</h1>
                        {tags.map((item) => (
                            <div className="" key={item.id}>
                                <button className="px-2 py-1 border-1 w-fit ">{item.name}</button>
                            </div>
                        ))}
                    </div>
                    <div className="lg:flex grid gap-5 items-center gap-5 mt-5 lg:mt-10">
                        <img src={profile1} alt="" className="w-32 h-32 rounded-full  object-cover" />
                        <div className="grid gap-4">
                            <h1 className="text-3xl font-bold">Julie Christie</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                    </div>
                </div>
                <div className="grid lg:gap-10 gap-5">
                    <div className="flex justify-between items-center">
                        <h1>Search</h1>
                        <div>
                            <FaSearch />
                        </div>
                    </div>
                    <hr className="" />
                    <div>
                        <h1 className="text-2xl py-2 font-bold">Categories</h1>
                        <hr className="border border-dotted" />
                    </div>
                    <div className="grid gap-5">
                        <div className="flex justify-between items-center">
                            <h1>Fashion</h1>
                            <h1>16</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>Food</h1>
                            <h1>20</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>Music</h1>
                            <h1>12</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>Travel</h1>
                            <h1>36</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl py-2 font-bold">Recent Comments</h1>
                        <hr className="border border-dotted" />
                    </div>
                    <div className="grid gap-5">
                        <div>
                            <p className="text-xs"><span className="text-gray-400 ">John Mccain Vegan</span> baked oatmeal with fresh berries</p>
                        </div>
                        <div>
                            <p className="text-xs"><span className="text-gray-400 ">Ana </span>50 Foods That Are Super Healthy</p>
                        </div>
                        <div>
                            <p className="text-xs"><span className="text-gray-400 ">Camilla </span>How Many Carbs Should You Eat for Weight Loss?</p>
                        </div>
                        <div>
                            <p className="text-xs"><span className="text-gray-400 ">Dailey</span> 22 Foods That Can Give You More Energy</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl py-2 font-bold">Archives</h1>
                        <hr className="border border-dotted" />
                    </div>
                    <div className="grid gap-5">
                        <div className="flex justify-between items-center">
                            <h1>October</h1>
                            <h1>12</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>September</h1>
                            <h1>6</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>August</h1>
                            <h1>23</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl py-2 font-bold">Recent Posted </h1>
                        <hr className="border border-dotted" />
                    </div>
                    <div className="grid gap-5">
                        <div className="flex gap-3 items-center">
                            <img src={fash2} alt="" className="w-18 h-18 object-cover" />
                            <div className="">
                                <h1 className="text-xl font-mono">Vegan baked oatmeal with fresh berries</h1>
                                <div className="flex gap-3 text-gray-400 text-sm">
                                    <h1>Julie Christie</h1>
                                    <h1>.</h1>
                                    <h1>October 17,2021</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src={fash1} alt="" className="w-18 h-18" />
                            <div className="">
                                <h1 className="text-xl font-mono">Vegan baked oatmeal with fresh berries</h1>
                                <div className="flex gap-3 text-gray-400 text-sm">
                                    <h1>Julie Christie</h1>
                                    <h1>.</h1>
                                    <h1>October 17,2021</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src={fash4} alt="" className="lg:w-24 w-32 h-18" />
                            <div className="">
                                <h1 className="text-xl font-mono">Vegan baked oatmeal with fresh berries</h1>
                                <div className="flex gap-3 text-gray-400 text-sm">
                                    <h1>Julie Christie</h1>
                                    <h1>.</h1>
                                    <h1>October 17,2021</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <img src={fash5} alt="" className="w-32 lg:w-24 h-18" />
                            <div className="">
                                <h1 className="text-xl font-mono">Vegan baked oatmeal with fresh berries</h1>
                                <div className="flex gap-3 text-gray-400 text-sm">
                                    <h1>Julie Christie</h1>
                                    <h1>.</h1>
                                    <h1>October 17,2021</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-10">
                        <div>
                            <h1 className="text-2xl py-2 font-bold">Tages </h1>
                            <hr className="border-1 border-dotted" />
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-2  gap-5 items-center py-4">
                            {tags.map((item) => (
                                <div key={item.id}>
                                    <button className="px-2 py-1 border-1 w-fit ">{item.name}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid lg:grid-cols-2 gap-1 w-full lg:px-2 px-4 mx-auto items-center ">
                <div className=" relative">
                    <img src={fash4} alt="" className=" w-full object-cover h-50" />
                    <div className="absolute bg-black/30 inset-0"></div>
                    <div className="absolute top-15  left-0 z-10 inset-0 px-4 text-white">
                        <div className="grid gap-3 items-center justify-center">
                            <div className="flex gap-2 items-center justify-center">
                                <FaArrowLeft className=" text-center" />
                                <h1 className=" text-center uppercase">Previous post</h1>
                            </div>
                            <p className="text-center text-xl font-mono">7 Reasons to Start Your Day With Lemon <br /> Water</p>
                        </div>

                    </div>

                </div>
                <div className=" relative">
                    <img src={pomo} alt="" className=" w-full object-cover h-50" />
                    <div className="absolute bg-black/30 inset-0"></div>
                    <div className="absolute top-15 left-0 z-10 inset-0  px-4 text-white">
                        <div className="grid gap-3 items-center justify-center">
                            <div className="flex gap-2 items-center justify-center">
                                <FaArrowLeft className=" text-center" />
                                <h1 className=" text-center uppercase">Previous post</h1>
                            </div>
                            <p className="text-center text-xl font-mono">7 Reasons to Start Your Day With Lemon <br /> Water</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="py-4 px-4 lg:px-0">
                <div className="flex items-center gap-1 text-3xl items-center justify-center">
                    <span className="relative top-[10px] font-mono">5</span>
                    <span className="">Comments</span>
                </div>
                <div className="grid gap-4 py-8 max-w-3xl mx-auto px-4 lg:px-0">
                    <div className="lg:flex grid gap-10 lg:gap-5">
                        <div>
                            <img src={profile2} alt="" className="w-12 h-12" />
                        </div>
                        <div className="grid gap-2">
                            <h1 className="text-black font-bold">Leslie Alexander</h1>
                            <h1 className="text-gray-300">March 12,2020,7:08 pm</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                        <div className="font-bold">
                            Reply
                        </div>
                    </div>
                    <div className="lg:flex grid gap-10 lg:gap-5 pl-15 lg:pl-30 ">
                        <div>
                            <img src={profile1} alt="" className="w-12 h-10 rounded-full object-cover" />
                        </div>
                        <div className="grid gap-2">
                            <h1 className="text-black font-bold">Jenifer Lopez</h1>
                            <h1 className="text-gray-300">March 12,2020,7:08 pm</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                        <div className="font-bold">
                            Reply
                        </div>
                    </div>
                    <div className="lg:flex grid gap-10 lg:gap-5">
                        <div>
                            <img src={profile2} alt="" className="w-12 h-12" />
                        </div>
                        <div className="grid gap-2">
                            <h1 className="text-black font-bold">Jene Cooper</h1>
                            <h1 className="text-gray-300">March 12,2020,7:08 pm</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                        <div className="font-bold">
                            Reply
                        </div>
                    </div>
                    <div className="lg:flex grid  gap-10 lg:gap-5 pb-10">
                        <div>
                            <img src={profile1} alt="" className="w-12 h-12" />
                        </div>
                        <div className="grid gap-2">
                            <h1 className="text-black font-bold">Jenny Wilson</h1>
                            <h1 className="text-gray-300">March 12,2020,7:08 pm</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                        </div>
                        <div className="font-bold">
                            Reply
                        </div>
                    </div>
                    <hr className="border-1 border-dotted " />
                </div>
                <h1 className="text-center text-2xl  py-4">Leave a Reply</h1>

                <div className="max-w-3xl px-4 lg:px-0 mx-auto">
                    <div className="py-4">
                        <label htmlFor="" className="font-bold text-xl ">Comment</label>
                        <input type="text" className="border-2 w-full h-40" />
                    </div>
                    <div className="py-4">
                        <label htmlFor="" className="font-bold text-xl ">Name*</label>
                        <input type="text" className="border-2 w-full h-12" />
                    </div>
                    <div className="py-4">
                        <label htmlFor="" className="font-bold text-xl ">Email*</label>
                        <input type="text" className="border-2 w-full h-12" />
                    </div>  <div className="py-4">
                        <label htmlFor="" className="font-bold text-xl ">Website*</label>
                        <input type="text" className="border-2 w-full h-12" />
                    </div>
                </div>
                <div className="text-center py-10 lg:text-start lg:pl-63">
                    <button className="border-2 font-bold text-xl w-it px-4 py-2">
                        Post Comment
                    </button>
                </div>
            </div>
        </main >
    )
}

export default Goat;