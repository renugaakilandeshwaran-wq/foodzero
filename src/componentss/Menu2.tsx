import Blueberry from "../assets/Blueberry.png";
import starters from "../assets/starters.png";

function Menu2() {
    return (
        <div className="relative lg:py-10 ">
            <div>
                <img src={Blueberry} alt="" className="top-0 absolute  right-20 lg:w-62 w-52" />
            </div>
            <div className="text-center py-4 ">
                <h1 className="text-4xl lg:text-7xl font-mono lg:mt-0">Starters</h1>
                <h2 className="text-xs lg:text-base">This is a section of your menu. Give your section a brief description</h2>
            </div>
            <div className="grid lg:grid-cols-2 items-center gap-5 py-20 px-4">
                <div className="px-4">
                    <img src={starters} alt="" className="w-full lg:h-170 object-cover" />
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

export default Menu2;