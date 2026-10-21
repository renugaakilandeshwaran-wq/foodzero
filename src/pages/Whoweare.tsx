import wwa from "../assets/wwa.png";
import Tomato from "../assets/Tomato.png";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";
import chef4 from "../assets/chef4.png";
import { BiPlay } from "react-icons/bi";
import chicken from "../assets/chicken.png";
import chicken2 from "../assets/chicken2.png";
import chicken3 from "../assets/chicken3.png";
import rosemary from "../assets/rosemary.png";
import rosemary1 from "../assets/rosemary1.png";
import Home5 from "../componentss/Home5";

function Whoweare() {
    return (
        <>
            <div className="relative bg-cover bg-no-repeat h-screen max-w-7xl mx-auto py-10 " style={{ backgroundImage: `url(${wwa})` }}>
                <div className="absolute inset-0 bg-black/50 ">
                    <div className="grid gap-5 text-white mt-100">
                        <h1 className="text-3xl lg:text-8xl font-mono text-center lg:text-end lg:px-50">Who We Are</h1>
                        <p className="lg:text-end lg:px-38 text-xs lg:text-base text-center">The most important thing for us is to give you the comfortable dining experience</p>
                    </div>
                </div>
            </div>
            <div className="py-5 lg:py-30 max-w-7xl mx-auto relative">
                <div>
                    <img src={Tomato} alt="" className="absolute lg:top-20 top-55 lg:left-120 left-20 lg:w-52 w-32" />
                </div>
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 items-center justify-center px-4 lg:px-8 py-4">
                    <div className="grid gap-5">
                        <h1 className="lg:text-6xl text-center lg:text-start text-2xl">Our Story</h1>
                        <p className="lg:leading-8 text-sm lg:text-base px-2 lg:px-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Purus lorem id penatibus imperdiet.
                            Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                        </p>
                    </div>
                    <div className="py-30 lg:py-0">
                        <img src={chef1} alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-5 lg:py-20">
                <div className="grid lg:grid-cols-[2fr_2fr] items-center justify-center gap-5 lg:gap-20 px-10">
                    <div className="grid gap-5 lg:gap-10 items-center justify-center">
                        <div>
                            <h1 className="text-4xl  font-mono">Restuarant Manager</h1>
                            <h2 className="text-sm ">Carson Hugn</h2>
                        </div>
                        <div>
                            <img src={chef2} alt="" className="w-full lg:h-120 lg:w-102 object-cover" />
                        </div>
                        <div className="lg:pt-50">
                            <p className="text-start text-xs">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Et in sed in pellentesque <br /> ornare nunc nisl.
                                Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <div className="lg:pb-50">
                            <p className="text-start text-xs">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. <br />Et in sed in pellentesque ornare nunc nisl.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-4xl  font-mono">Executive Chef</h1>
                            <h2 className="text-sm">Jane Cooper</h2>
                        </div>
                        <div>
                            <img src={chef3} alt="" className="object-cover w-full lg:w-102" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-cover w-full py-5 lg:py-20 bg-no-repeat max-w-7xl h-screen mx-auto relative" style={{ backgroundImage: `url(${chef4})` }} >
                <div className="bg-black/50 absolute inset-0">
                    <div className="absolute top-1/2 lg:left-50 ">
                        <h1 className="text-3xl lg:text-8xl text-white  text-center">It looks delicious</h1>
                        <h2 className="text-white text-center lg:px-0 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>

                    </div>
                    <div className="border absolute left-1/2 top-130  rounded-full border-white w-fit text-center">
                        <BiPlay className="text-white text-3xl " />
                    </div>
                </div>
            </div>
            <div className="py-10 lg:py-20 relative max-w-7xl mx-auto">
                <div>
                    <img src={rosemary} alt="" className="absolute top-0 right-0 lg:w-52 w-32" />
                </div>
                <h1 className="text-3xl lg:text-6xl text-center py-10">Sophisticated Process</h1>
                <div className="grid lg:grid-cols-2  gap-5 lg:gap-20 items-center justify-center px-10 max-w-6xl mx-auto py-4">
                    <div>
                        <img src={chicken} alt="" />
                    </div>

                    <div className="grid gap-5">
                        <h1 className="text-6xl "><span className="text-3xl font-bold">oI.</span>Slice</h1>
                        <p className="text-sm leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                            lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor
                            tincidunt lacus nunc. Convallis pellentesque quis fringilla
                            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam. </p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2  gap-5 lg:gap-20 items-center justify-center px-10 max-w-6xl mx-auto py-4  lg:grid hidden">

                    <div className="grid gap-5">
                        <h1 className="text-6xl">
                            <span className="text-2xl lg:text-xl font-bold">o3.</span>Bake
                        </h1>
                        <p className="text-sm leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                        </p>
                    </div>
                    <div>
                        <img src={chicken2} alt="" className="w-122" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2  gap-5 lg:gap-20 items-center justify-center px-10 max-w-6xl mx-auto py-4">

                    <div>
                        <img src={chicken3} alt="" />
                    </div>
                    <div className="grid gap-5">
                        <h1 className="text-6xl "><span className="text-3xl font-bold">o2.</span>Pickled</h1>
                        <p className="text-sm leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                        </p>
                    </div>

                </div>
                <div className="grid lg:grid-cols-2 lg:hidden block  gap-5 lg:gap-20 items-center justify-center px-10 max-w-6xl mx-auto py-4">

                    <div>
                        <img src={chicken2} alt="" />
                    </div>
                    <div className="grid gap-5">
                        <h1 className="text-6xl "><span className="text-3xl font-bold">o3.</span>Bake</h1>
                        <p className="text-sm leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                        </p>
                    </div>

                </div>
                <div className="py-10">
                    <img src={rosemary1} alt="" className="absolute bottom-0 left-0 lg:w-42 w-22" />
                </div>

            </div>
            <div className="max-w-7xl mx-auto">
                <Home5 />

            </div>
        </>
    )
}

export default Whoweare;