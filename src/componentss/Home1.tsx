import home1 from "../assets/home1.png";
import powder1 from "../assets/powder1.png";
import powder2 from "../assets/powder2.png";
import powder3 from "../assets/powder3.png";
import pasta from "../assets/pasta.png";
import pasta2 from "../assets/pasta2.png";



function Home1() {
    return (
        <div className="max-w-7xl mx-auto bg-[#233000] lg:pt-25 pt-25 text-white py-4">
            <div className="grid gap-5 lg:grid-cols-2 justify-between items-start px-4">
                <div className="space-y-3">
                    <h1 className="lg:text-6xl text-3xl text-center font-serif max-w-xl leading-12 lg:leading-22">Healthy Eating
                        is important
                        part of lifestyle</h1>
                    <h1 className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</h1>

                </div>
                <div className="text-center relative">
                    <div className="-mb-">
                        <img src={home1} alt="" className="lg:w-112 lg:h-140 w-fit object-cover  " />
                        <div className="absolute lg:top-100 lg:-left-40 lg:right-90 top-65">
                            <div className="flex gap-5 mt-10">
                                <div>
                                    <img src={powder1} alt="" className="w-32" />
                                </div>
                                <div>
                                    <img src={powder2} alt="" className="w-32" />
                                </div><div>
                                    <img src={powder3} alt="" className="w-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid lg:grid-cols-[3fr_2fr] items-center justify-center gap-5 px-8 mt-20">
                <div className="grid gap-5">

                    <img src={pasta} alt="" className="object-cover lg:w-142 lg:h-90" />
                    <h1 className="text-4xl font-bold">Start to plan your diet today</h1>
                    <h1 className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</h1>
                </div>
                <div className="grid gap-5">
                    <h1 className="text-">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</h1>
                    <img src={pasta2} alt="" className="lg:w-92 " />
                </div>
            </div>
        </div>
    )
}

export default Home1;