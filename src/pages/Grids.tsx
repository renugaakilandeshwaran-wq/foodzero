import salats from "../assets/salats.png";
import fish1 from "../assets/fish1.png";
import athi from "../assets/athi.png";
import pum from "../assets/pum.png";
import pum1 from "../assets/pum1.png";
import sea1 from "../assets/sea1.png";
import sea2 from "../assets/sea2.png";

function Grids() {
    return (
        <>
            <div className="relative bg-cover bg-no-repeat h-screen max-w-7xl mx-auto py-10 " style={{ backgroundImage: `url(${salats})` }}>
                <div className="absolute inset-0 bg-black/30 ">
                    <h1 className="text-center text-white mt-80  lg:text-6xl text-3xl">
                        Portfolio-Grids
                    </h1>
                </div>
            </div>
            <div className="max-w-4xl mx-auto font-mono text-center items-center justify-center text-[7px] lg:text-xl py-10 flex gap-5">
                <h1>All</h1>
                <h1>Starter</h1>
                <div>
                    <h1>Launch</h1>
                    <hr className="border border-dotted border-1" />
                </div>
                <h1>Dinner</h1>
                <h1>Drinks</h1>
                <h1>Sweets</h1>
                <h1>Fruits</h1>
            </div>
            <div className="max-w-6xl mx-auto px-10 lg:px-0 py-10">
                <div className="grid lg:grid-cols-[3fr_1fr] gap-5  items-center justify-center ">
                    <div>
                        <img src={fish1} alt="" className="lg:h-180 object-cover w-fit lg:w-full" />
                    </div>
                    <div className="reltative text-center">
                        <img src={athi} alt="" className=" lg:w-full w-full h-60 lg:h-180 object-cover" />
                        <div className="absolute lg:top-430 top-310  ">
                            <h1 className="text-white text-xs lg:text-3xl font-bold pr-6 lg:pr-110 lg:pl-5">Option of natural wine available</h1>
                            <div className="">
                                <div className="flex gap-5 items-center lg:justify-between lg:pl-10 lg:pr-130 pl-10 pr-30 text-white text-xs lg:text-2xl">
                                    <h1>Drink</h1>
                                    <h1>.</h1>
                                    <h1>Fruit</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-[1fr_3fr] gap-5 lg:gap-10 items-center py-5  justify-center">

                    <div className="relative  ">
                        <img src={pum} alt="" className="lg:h-180 w-full h-52 object-cover" />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* Text */}
                        <div className="absolute inset-x-0 lg:bottom-0 bottom-2 p-2 lg:p-6">
                            <h1 className="text-white text-xs lg:text-4xl font-bold">
                                Best pumpkin for pumpkin soup
                            </h1>

                            <div className="flex items-center gap-2 lg:justify-between text-white text-xs lg:text-2xl py-2">
                                <h1>Launch</h1>
                                <h1>.</h1>
                                <h1>Dinner</h1>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={pum1} alt="" className="lg:w-fit  object-cover" />
                        <div className="absolute bg-black/20 inset-0 "></div>
                        <div className="absolute inset-x-0 bottom-0 p-6">
                            <h1 className="text-white max-w-xl text-xs lg:text-4xl font-bold">
                                Strip Steak With Rosemary Butter
                            </h1>
                            <div className="flex items-center gap-4 text-white text-xs  lg:text-2xl py-2">
                                <h1>Dinner</h1>
                                <h1>.</h1>
                                <h1>Launch</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid lg:grid-cols-[3fr_3fr] gap-5 max-w-7xl mx-auto items-center justify-center  pb-5">
                    <div className="relative">
                        <img src={sea1} alt="" className="lg:h-140  object-cover lg:w-full" />

                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-x-0 lg:bottom-0 lg:p-6 bottom-3 p-2">
                            <h1 className="text-white lg:max-w-xl text-xs lg:text-4xl font-bold">
                                Braised Sliced Abalone,Fish Maw with Premium Seafood
                            </h1>
                            <div className="flex items-center gap-4 text-white text-xs lg:text-2xl py-2">
                                <h1>Cold Dishes</h1>
                                <h1>.</h1>
                                <h1>Starters</h1>
                            </div>
                        </div>
                    </div>

                    <div className="relative ">
                        <img src={sea2} alt="" className="w-full lg:h-140 object-cover" />
                        <div className="inset-0 absolute bg-black/20"></div>
                        <div className="inset-x-0 absolute lg:bottom-0 bottom-3 lg:p-6 p-2">
                            <h1 className="text-white max-w-xl text-xs lg:text-4xl font-bold">
                                Pan Fried Live Prawn with Superior Soy Sauce</h1>
                            <div className="flex items-center gap-4 text-white text-xs lg:text-2xl py-2">
                                <h1>Starters</h1>
                                <h1>.</h1>
                                <h1>Dinner</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto text-center pb-10">
                <button className="border border-1 text-blue-600 px-10  py-2">Loading...</button>
            </div>
        </>
    )
}

export default Grids;