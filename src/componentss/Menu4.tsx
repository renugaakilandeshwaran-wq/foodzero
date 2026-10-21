import Avocado from "../assets/Avocado.png";
import drinks from "../assets/drinks.png";

function Menu4() {
    return (
        <div className="py-5 lg:py-10">
            <div className="relative">
                <div className="text-center py-4 lg:py-10 ">
                    <h1 className="text-4xl lg:text-7xl font-mono lg:mt-0">Pastries & Drinks</h1>
                    <h2 className="text-xs lg:text-base">This is a section of your menu. Give your section a brief description</h2>
                </div>
                <div>
                    <img src={Avocado} alt="" className=" absolute top-0 lg:left-140 left-30 object-contain w-24 lg:w-52" />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 items-center gap-5 py-10 lg:py-20 px-4">
                <div className="px-4">
                    <img src={drinks} alt="" className="w-full lg:h-170 object-cover" />
                </div>
                <div className="grid gap-5 ">
                    <div className="px-4">
                        <h1 className="text-end font-bold lg:text-3xl">$20</h1>
                        <hr className="border border-dotted w-full" />
                        <p className="text-2xl lg:text-5xl py-3 font-mono">Grilled Okra and Tomatoes </p>
                        <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="px-4">
                        <h1 className="text-end font-bold lg:text-3xl">$18</h1>
                        <hr className="border border-dotted w-full" />
                        <p className="text-2xl lg:text-5xl py-3 font-mono">Cucumber Salad </p>
                        <p className="text-xs lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="px-4">
                        <h1 className="text-end font-bold lg:text-3xl">$12</h1>
                        <hr className="border border-dotted w-full" />
                        <p className="lg:text-5xl text-2xl py-3 font-mono"> Basil Pancakes </p>
                        <p className="text-base lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu4;