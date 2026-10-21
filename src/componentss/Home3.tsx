import leaf from "../assets/leaf.png"
import cooking from "../assets/cooking.png"

function Home3() {
    return (
        <div className="bg-[#EBF0E4] px-4 py-4">

            <div className="grid lg:grid-cols-2 items-center justify-center">
                <div className="grid gap-0 px-4 py-4">
                    <div>
                        <img src={leaf} alt="" className="lg:w-42 w-22  " />
                    </div>
                    <div>
                        <img src={cooking} alt="" />
                    </div>
                </div>
                <div className="grid gap-5">
                    <h1 className="text-6xl font-bold ">Excellent cook</h1>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Purus lorem id penatibus imperdiet.
                        Turpis egestas ultricies purus auctor tincidunt lacus nunc.
                    </p>
                    <img src={leaf} alt="" className="lg:w-88 w-42 mx-auto" />
                </div>
            </div>

        </div>
    )
}

export default Home3;