import orange1 from "../assets/orange1.png";
import ghee from "../assets/ghee.png";
import lemon from "../assets/lemon.png";
import curry from "../assets/curry.png";
import { FaArrowLeft } from "react-icons/fa";
import { PiDotsNine } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";

function SeaFoods() {
    return (

        <>
            <div className="max-w-7xl mx-auto ">
                <div className="bg-cover bg-center bg-no-repeat h-screen relative" style={{ backgroundImage: `url(${orange1})` }}>
                    <div className="absolute bg-black/30 inset-0">
                        <h1 className="lg:text-7xl text-2xl text-center font-bold font-mono  absolute top-1/2 left-15 text-white right-10">Deep Sea Snow White Cod Fillet</h1>
                    </div>
                </div>
                <div className="mt-5 lg:mt-10 lg:px-20 px-4">
                    <div className="grid lg:flex w-full gap-5 items-start justify-between">
                        <div className="max-w-xl py-5">
                            <img src={lemon} alt="" className="lg:w-fit w-82  lg:h-140" />
                        </div>
                        <div className="grid gap-5 max-w-xl px-4 lg:px-0 py-4 lg:py-0">
                            <h1 className="font-bold  text-center lg:text-start text-xl lg:text-4xl">
                                Melt In Your Mouth
                            </h1>
                            <h2 className="max-w-[330px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                            <p className="max-w-[360px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Et in sed in pellentesque ornare nunc nisl. Augue habitant
                                accumsan, ut parturient orci ac etiam congue mi.
                            </p>
                        </div>
                    </div>
                    <div className="relative pb-100">
                        <div className="flex max-w-7xl items-center lg:py-15 ">
                            <div className="">
                                <img src={ghee} alt="" className="lg:w-142 lg:h-150 absolute w-82 lg:left-50 lg:-top-30 object-cover" />
                            </div>
                            <div className="absolute lg:left-200 top-40 lg:top-80 right-0 ">
                                <h1 className="font-bold  text-center lg:text-start text-xl lg:text-4xl">
                                    The Best Taste
                                </h1>
                                <p className="px-10 lg:px-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="text-center lg:text-start py-5 lg:max-w-[420px] mx-auto px-10 lg:px-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Et in sed in pellentesque ornare nunc nisl. Augue habitant
                        accumsan, ut parturient orci ac etiam congue mi. </p>
                    <h1 className="font-bold mt-5 text-center lg:text-start text-xl lg:text-4xl">
                        Cooking Suggestions
                    </h1>
                    <h2 className="py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
                </div>
                <div className="text-center mx-auto max-w-5xl pb-10 mx-auto lg:px-0 px-4 ">
                    <img src={curry} alt="" className="object-cover mx-auto" />
                </div>
                <div className="bg-[#EBF0E4] w-full py-20 px-4 text-center lg:px-0">
                    <div className="grid lg:grid-cols-[3fr_1fr_3fr] items-center justify-center  gap-5 mx-auto px-2 ">
                        <div className="grid items-center justify-center">
                            <div className="flex gap-3 items-center justify-center">
                                <FaArrowLeft className=" text-center" />
                                <h1 className=" text-center">previous  Page</h1>
                            </div>
                            <h1 className="text-xl font-mono text-[#233000]">Strip Steak With Rosemary Butter</h1>
                        </div>
                        <div className="text-center mx-auto">
                            <PiDotsNine className="text-4xl  font-bold text-center" />
                        </div>
                        <div className="grid items-center justify-center">
                            <div className="flex gap-3 items-center justify-center">
                                <h1 className=" text-center">Next  Page</h1>
                                <FaArrowRight className=" text-center" />

                            </div>
                            <h1 className="text-xl font-mono text-[#233000]">Option of natural wine available</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SeaFoods;