import blue from "../assets/blue.png";
import fash2 from "../assets/fash2.png";
import fash1 from "../assets/fash1.png";
import fash3 from "../assets/fash3.png";
import fash4 from "../assets/fash4.png";
import fash5 from "../assets/fash5.png";
import fash6 from "../assets/fash6.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import { FiArrowRight } from "react-icons/fi";
function Blogtwo() {
    return (
        <>
            <div className="relative h-screen max-w-7xl mx-auto bg-cover bg-no-repeat" style={{ backgroundImage: `url(${blue})` }}>
                <div className="absolute inset-0  bg-black/50 text-white  ">
                    <div className="absolute lg:top-1/2 top-100 left-10 lg:left-50">
                        <h1 className="lg:text-7xl text-4xl font-bold text-center ">Blogs List - Two Column</h1>
                        <h2 className="text-center texts-xs lg:text-base mt-5">It is easy way to create your beatiful blog for daily</h2>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 max-w-7xl mx-auto pt-10 lg:pt-15 px-4 lg:text-xl text-xs">
                <h1 className="text-gray-400">Home/</h1>
                <h1 className="text-gray-400">Blog/</h1>
                <h1>Blog Two Columns/</h1>
            </div>
            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto lg:gap-5 py-10 items-center justify-center">
                <div className="relative">
                    <img src={fash2} alt=""
                        className="lg:h-100 lg:w-150 w-full px-6 h-70 lg:px-0 mx-auto object-cover"
                    />
                    <button className="absolute top-0 right-6 lg:right-10 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                </div>
                <div className="grid items-center justify-center lg:px-4 px-8 py-2 lg:py-0 gap-5 max-w-xl mx-auto">
                    <div className="flex gap-5 items-center text-xs lg:text-xl">
                        <img src={profile1} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base">Julie Christie</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                    </div>
                    <div>
                        <p className="lg:text-4xl text-2xl font-semibold">Fruit and vegetables and protection against diseases</p>
                    </div>
                    <hr className="border-1 border-dotted " />
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="">
                        <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                    </div>
                </div>
            </div>
            {/* grid2 */}

            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto lg:gap-5 py-10 items-center justify-center">
                <div className="relative">
                    <img src={fash1} alt=""
                        className="lg:h-100 lg:w-150 w-full px-6 h-70 lg:px-0 mx-auto object-cover"
                    />
                    <button className="absolute top-0 right-6 lg:right-10 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                </div>
                <div className="grid items-center justify-center lg:px-4 px-8 py-2 lg:py-0 gap-5 max-w-xl mx-auto">
                    <div className="flex gap-5 items-center text-xs lg:text-xl">
                        <img src={profile2} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base">Dianne Russell</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                    </div>
                    <div>
                        <p className="lg:text-4xl text-2xl font-semibold">
                            Asparagus Spring Salad with Rocket, Goat's Cheese
                        </p>
                    </div>
                    <hr className="border-1 border-dotted " />
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="">
                        <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                    </div>
                </div>
            </div>
            {/* grid3 */}
            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto lg:gap-5 py-10 items-center justify-center">
                <div className="relative">
                    <img src={fash3} alt=""
                        className="lg:h-100 lg:w-150 w-full px-6 h-70 lg:px-0 mx-auto object-cover"
                    />
                    <button className="absolute top-0 right-5 lg:right-10 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                </div>
                <div className="grid items-center justify-center lg:px-4 px-8 py-2 lg:py-0 gap-5 max-w-xl mx-auto">
                    <div className="flex gap-5 items-center text-xs lg:text-xl">
                        <img src={profile1} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base">Jenifier Lopez</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                    </div>
                    <div>
                        <p className="lg:text-4xl text-2xl font-semibold">
                            The Best Style of Dough for Dumplings
                        </p>
                    </div>
                    <hr className="border-1 border-dotted " />
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="">
                        <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                    </div>
                </div>
            </div>
            {/* grid4 */}
            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto lg:gap-5 py-10 items-center justify-center">
                <div className="relative">
                    <img src={fash4} alt=""
                        className="lg:h-100 lg:w-150 w-full px-6 h-70 lg:px-0 mx-auto object-cover"
                    />
                    <button className="absolute top-0 right-6 lg:right-10 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                </div>
                <div className="grid items-center justify-center lg:px-4 px-8 py-2 lg:py-0 gap-5 max-w-xl mx-auto">
                    <div className="flex gap-5 items-center text-xs lg:text-xl">
                        <img src={profile2} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base">Theresa Webb</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                    </div>
                    <div>
                        <p className="lg:text-4xl text-2xl font-semibold">
                            7 Reasons to Start Your Day With Lemon Water</p>
                    </div>
                    <hr className="border-1 border-dotted " />
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="">
                        <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                    </div>
                </div>
            </div>

            {/* grid5 */}
            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto lg:gap-5 py-10 items-center justify-center">
                <div className="relative">
                    <img src={fash5} alt=""
                        className="lg:h-100 lg:w-150 px-6 h-70 w-full lg:px-0 mx-auto object-cover"
                    />
                    <button className="absolute top-0 right-6 lg:right-10 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                </div>
                <div className="grid items-center justify-center lg:px-4 px-8 py-2 lg:py-0 gap-5 max-w-xl mx-auto">
                    <div className="flex gap-5 items-center text-xs lg:text-xl">
                        <img src={profile1} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base">Cody Fisher</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                    </div>
                    <div>
                        <p className="lg:text-4xl text-2xl font-semibold">
                            Three Ideas for Cooking Goat Meat at Home
                        </p>
                    </div>
                    <hr className="border-1 border-dotted " />
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="">
                        <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                    </div>
                </div>
            </div>

            {/* grid6 */}
            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto lg:gap-5 py-10 items-center justify-center">
                <div className="relative">
                    <img src={fash6} alt=""
                        className="lg:h-100 lg:w-150 px-6 h-70 lg:px-0 w-full mx-auto object-cover"
                    />
                    <button className="absolute top-0 right-6 lg:right-10 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                </div>
                <div className="grid items-center justify-center lg:px-4 px-8 py-2 lg:py-0 gap-5 max-w-xl mx-auto">
                    <div className="flex gap-5 items-center text-xs lg:text-xl">
                        <img src={profile2} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base">Leslie Alexander</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                        <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                    </div>
                    <div>
                        <p className="lg:text-4xl text-2xl font-semibold">
                            12 Sparkling Wines We're Loving This Summer
                        </p>
                    </div>
                    <hr className="border-1 border-dotted " />
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <div className="">
                        <p className="lg:text-2xl text-xl flex items-center font-bold">Read More <FiArrowRight /></p>

                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto text-center pb-10">
                <button className="border border-1 text-blue-600 px-10  py-2">Loading...</button>
            </div>
        </>
    )
}

export default Blogtwo;