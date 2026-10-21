import leaf1 from "../assets/leaf1.png";

function Home2() {
    return (
        <div className="max-w-7xl mx-auto lg:pt-0 pt-25 text-white py-40">
            <div className="relative">
                <div className='grid lg:grid-cols-2 gap-5 items-start '>
                    <div className="lg:hidden block">
                        <img src={leaf1} alt="" className="object-cover w-full" />
                    </div>
                    <div className='grid gap-3 -mt-50 lg:mt-20 px-4'>
                        <h1 className=' text-6xl text-start  text-black'>Our Menu</h1>
                        <h2 className="text-black">This is a section of your menu. Give your section a brief description</h2>
                    </div>
                    <div className="lg:block hidden">
                        <img src={leaf1} alt="" className="object-cover w-full" />
                    </div>
                </div>
                <div className="lg:absolute lg:top-85 left-0 right-0 ">
                    <div className="grid lg:grid-cols-2 items-center justify-center px-12 text-black gap-20">
                        <div className="grid gap-3">
                            <h1 className="text-end font-bold text-xl">$20</h1>
                            <hr />
                            <h1 className="text-3xl font-sarif">Deep Sea Snow White Cod Fillet</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                        </div>
                        <div className="grid gap-3">
                            <h1 className="text-end font-bold text-xl">$22</h1>
                            <hr />
                            <h1 className=" text-3xl font-sarif">Steak With Rosemary Butter</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                        </div>
                        <div className="grid gap-3">
                            <h1 className="text-end font-bold text-xl">$18</h1>
                            <hr />
                            <h1 className="text-3xl font-sarif">Cucumber Salad</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                        </div>
                        <div className="grid gap-3">
                            <h1 className="text-end font-bold text-xl">$go</h1>
                            <hr />
                            <h1 className=" text-3xl font-sarif">Natural Wine Pairing</h1>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home2