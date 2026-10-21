import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";

import piece from "../assets/piece.png";
import fourpiece from "../assets/fourpiece.png";
import salt from "../assets/salt.png";
import cake from "../assets/cake.png";
import fash1 from "../assets/fash1.png";
import fash2 from "../assets/fash2.png";
import { FiArrowRight } from "react-icons/fi";

function GoatMeal() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-screen bg-cover bg-no-repeat relative" style={{ backgroundImage: `url(${piece})` }}>
                <div className="absolute bg-white/10 inset-0">
                    <div className="absolute lg:top-50 top-50 lg:px-20 text-white">
                        <div className="max-w-7xl mx-auto text-center pb-10">
                            <button className="border border-1 text-white px-10  py-2">Fashion</button>
                        </div>
                        <h1 className="lg:text-7xl font-mono text-2xl px-4 lg:px-0 font-bold text-center ">
                            Three Ideas for Cooking Goat Meat at Home
                        </h1>
                        <div className="flex gap-5 items-center justify-center text-xs mt-5 lg:mt-10 lg:text-xl text-black">
                            <img src={profile1} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                            <h1 className="text-[10px] lg:text-base">Julie Christie</h1>
                            <h1 className="text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                            <h1 className="text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                            <h1 className="text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 max-w-7xl mx-auto px-0 lg:px-4 lg:text-xl text-xs py-20 items-center justify-center">
                <h1 className="text-gray-400">Home/</h1>
                <h1 className="text-gray-400">Blog/</h1>
                <h1>Three Ideas for Cooking Goat Meat at Home</h1>
            </div>
            <div className="max-w-3xl mx-auto">
                <p className="py-5 text-2xl px-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in
                    pellentesque ornare nunc nisl. Augue habitant accumsan,
                    ut parturient orci ac etiam congue mi. Elementum pellentesque
                    non hendrerit et pharetra tellus leo tempus tellus. </p>
            </div>

            <div className="max-w-3xl mx-auto grid lg:grid-cols-2 gap-5 py-10 px-4">
                <div>
                    <img src={fourpiece} alt="" className="w-72 lg:w-full h-100 object-cover mx-auto" />
                </div>
                <div>
                    <img src={salt} alt="" className="w-72 mx-auto lg:w-full h-100 object-cover" />
                </div>

            </div>
            <div>
                <p className="max-w-3xl mx-auto py-5 lg:px-0 px-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Et in sed in pellentesque ornare nunc nisl. Augue habitant
                    accumsan, ut parturient orci ac etiam congue mi. Elementum
                    pellentesque non hendrerit et pharetra tellus leo tempus tellus.
                    Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim
                    id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est
                    pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci
                    nec consequat amet. Id cursus purus et fringilla molestie a nulla turpis.
                    Lobortis dui rutrum sed sit. Mattis quis scelerisque consectetur orci
                    dui est sem nulla.Tortor ullamcorper neque, habitant vulputate at in.
                    Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique
                    sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris
                    est. Nec, lacinia eleifend amet, quis turpis et massa duis.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                    Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
                    parturient orci ac etiam congue mi. </p>
            </div>
            <div className="py- relative ">
                <div className="absolute inset-0 bg-black/50"></div>
                <img src={cake} alt="" className="w-full h-70 object-cover " />
                <p className="text-white absolute top-30 lg:left-80 max-w-xl lg:text-2xl px-6 mx-auto">
                    “ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Purus lorem id penatibus imperdiet.
                    Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
            </div>
            <div className="max-w-2xl mx-auto  py-10 px-6 lg:px-0">
                <p >
                    Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque consectetur orci dui est sem nulla.
                    Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris est. Nec,
                    lacinia eleifend amet, quis turpis et massa duis.
                </p>
            </div>
            <div className="px-4 lg:px-0">
                <h1 className="text-xl font-bold">Tags:</h1>

                <div className="grid grid-cols-2 lg:flex gap-3 max-w-2xl mx-auto py-10 px-4 lg:px-0">
                    <button className="border-2 w-fit px-4 py-2">Design</button>
                    <button className="border-2 w-fit px-4">Photography</button>
                    <button className="border-2 w-fit px-4">Images</button>
                    <button className="border-2 w-fit px-4">Videos</button>
                    <button className="border-2 w-fit px-4">Music</button>
                    <button className="border-2 w-fit px-4">Travel</button>
                </div>
            </div>
            <div className="max-w-2xl mx-auto lg:flex grid gap-5">
                <img src={profile1} alt="" className="w-26 h-26 rounded-full mx-auto" />
                <div className="grid gap-5 items-center justify-center px-6 lg:px-0">
                    <h1 className="font-bold text-xl">Julie Christie</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. </p>
                </div>
            </div>
            <div className="py-10 px-6 lg:px-0">
                <div className="border-2 border-dotted "></div>
            </div>
            <div className="py-10">
                <h1 className="text-2xl font-bold text-center">Related Posts</h1>
            </div>
            <div className="grid lg:grid-cols-2 max-w-7xl mx-auto lg:gap-10 items-center justify-center py-20 lg:py-10 px-8">
                <div className="grid gap-5">
                    <div className="relative">
                        <img src={fash2} alt=""
                            className="h-130 w-200 object-cover"
                        />
                        <button className="absolute top-0 right-0 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                    </div>
                    <div className="grid gap-5 px- lg:gap-10 ">
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
                        <img src={fash1} alt="" className="h-130 w-200 object-cover"
                        />
                        <button className="absolute top-0 right-0 text-white bg-[#5E6600] w-fit px-6 lg:px-10 py-1">Fashion</button>
                    </div>
                    <div className="grid gap-5 py- lg:gap-10">
                        <div className="flex gap-3 justify-between items-center text-xs lg:text-xl">
                            <img src={profile2} alt="" className="lg:w-12 lg:h-12 w-8 h-8 rounded-full" />
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base">Dianne Russell</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>October 17,2021</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base"><span>.</span>3.33 pm</h1>
                            <h1 className="text-[#5E6600] text-[10px] lg:text-base flex gap-2"><span className="">.</span>2 Comments</h1>
                        </div>
                        <div>
                            <p className="text-2xl lg:text-4xl font-semibold">
                                Asparagus Spring Salad with Rocket, Goat's Cheese
                            </p>
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
    )
}

export default GoatMeal;