import { FaCarrot, FaFishFins } from "react-icons/fa6";
import { GiOrangeSlice } from "react-icons/gi";
import fash2 from "../assets/fash2.png";
import fash1 from "../assets/fash1.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import { FiArrowRight } from "react-icons/fi";

function Home4() {
    return (
        <div className="bg-white text-black px-6 py-10 lg:py-20">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10">

                {/* Card 1 */}
                <div className="flex flex-col items-center text-center gap-5">
                    <div className="bg-[#EBF0E4] w-52 h-52 rounded-full flex items-center justify-center shrink-0">
                        <FaFishFins className="text-8xl" />
                    </div>

                    <h1 className="text-2xl lg:text-3xl font-bold">
                        Premium Quality
                    </h1>

                    <p className="text-gray-500 max-w-sm leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Neque congue arcu.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center gap-5">
                    <div className="bg-[#EBF0E4] w-52 h-52 rounded-full flex items-center justify-center shrink-0">
                        <FaCarrot className="text-8xl" />
                    </div>

                    <h1 className="text-2xl lg:text-3xl font-bold">
                        Seasonal Vegetables
                    </h1>

                    <p className="text-gray-500 max-w-sm leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Neque congue arcu.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-center gap-5">
                    <div className="bg-[#EBF0E4] w-52 h-52 rounded-full flex items-center justify-center shrink-0">
                        <GiOrangeSlice className="text-8xl" />
                    </div>

                    <h1 className="text-2xl lg:text-3xl font-bold">
                        Fresh Fruit
                    </h1>

                    <p className="text-gray-500 max-w-sm leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Neque congue arcu.
                    </p>
                </div>

            </div>

            <div className="grid lg:grid-cols-2 lg:gap-10 items-center justify-center py-20 lg:py-20 px-8">
                <div className="grid gap-5">
                    <div className="relative">
                        <img src={fash2} alt="" />
                        <button className="absolute top-0 right-0 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                    </div>
                    <div className="grid gap-5 py-4 lg:gap-10">
                        <div className="flex justify-between gap-3 items-center text-xs lg:text-xl">
                            <img src={profile1} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base">Julie Christie</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                        </div>
                        <div>
                            <p className="lg:text-4xl text-2xl font-semibold">Fruit and vegetables and protection against diseases</p>
                        </div>
                        <hr />
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <div className="">
                            <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                        </div>
                    </div>

                </div>
                <div className="grid gap-5">
                    <div className="relative">
                        <img src={fash1} alt="" className="" />
                        <button className="absolute top-0 right-0 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                    </div>
                    <div className="grid gap-5 py-2 lg:gap-10">
                        <div className="flex gap-3 justify-between items-center text-xs lg:text-xl">
                            <img src={profile2} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base">Dianne Russell</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                        </div>
                        <div>
                            <p className="text-2xl lg:text-4xl font-semibold">Asparagus Spring Salad with Rocket, Goat's Cheese</p>
                        </div>
                        <hr />
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <div className="">
                            <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home4;