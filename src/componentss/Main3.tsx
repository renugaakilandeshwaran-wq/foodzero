import mains from "../assets/mains.png";

function Main3() {
    return (
        <div className="lg:py-10 ">
            <div className="text-center py-4 lg:py-10 ">
                <h1 className="text-4xl lg:text-7xl font-mono lg:mt-0">Mains</h1>
                <h2 className="text-xs lg:text-base">This is a section of your menu. Give your section a brief description</h2>
            </div>
            <div className="grid lg:grid-cols-2 items-center gap-5 lg:gap-20 py-20 px-4 lg:px-8">
                <div className="grid gap-5 ">
                    <div className="px-4">
                        <h1 className="text-end font-bold lg:text-3xl">$20</h1>
                        <hr className="border border-dotted w-full" />
                        <p className="text-2xl lg:text-5xl py-3 font-mono">Deep Sea Snow White Cod Fillet </p>
                        <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="px-4">
                        <h1 className="text-end font-bold lg:text-3xl">$22</h1>
                        <hr className="border border-dotted w-full" />
                        <p className="text-2xl lg:text-5xl py-3 font-mono">Steak With Rosemary Butter </p>
                        <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="px-4">
                        <h1 className="text-end font-bold lg:text-3xl">$20</h1>
                        <hr className="border border-dotted w-full" />
                        <p className="lg:text-5xl text-2xl py-3 font-mono"> Steaks with Grilled Kimchi </p>
                        <p className="text-base lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
                <div className="px-4">
                    <img src={mains} alt="" className="w-full lg:h-170 object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Main3;