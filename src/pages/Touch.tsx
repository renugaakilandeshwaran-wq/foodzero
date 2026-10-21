import touchbg from "../assets/touchbg.png";
import Orange from "../assets/Orange.png";
import plate from "../assets/plate.png";
import resort from "../assets/resort.png";
import Mint from "../assets/Mint.png";
function Touch() {
    return (
        <>

            <div className=" max-w-7xl  mx-auto relative bg-cover bg-center h-screen lg:min-h-screen pt-25 bg-no-repeat"
                style={{ backgroundImage: `url(${touchbg})` }}>
                <div className="bg-black/50  inset-0 absolute">
                    <div className="mt-50 px-12 py-10">
                        <h1 className="text-4xl lg:text-8xl text-white">Get in Touch</h1>
                        <h2 className="text-white text-xs lg:text-base ">The freshest ingredients for you every day</h2>
                    </div>
                    <div className=" max-w-xl lg:ml-auto mx-auto mt-30 px-10 lg:px-0 lg:mt-70 px-4 py-4">
                        <div className="flex justify-between items-end w-full py-2 lg:px-8 lg:py-4">
                            <h1 className="text-white lg:text-2xl font-mono">Open Time</h1>
                            <h1 className="text-white  lg:text-2xl font-mono">Sunday-Friday</h1>
                        </div>
                        <div>
                            <hr className="border border-dotted border-white " />
                            <div className="grid text-white grid-cols-3 gap-5 items-center py-4">
                                <div className="text-center text-sm lg:text-xl">
                                    <h1>Brunch</h1>
                                    <h2>11:00–12:00</h2>
                                </div>
                                <div className="text-center text-sm lg:text-xl">
                                    <h1>Lunch</h1>
                                    <h2>13:00–17:00</h2>
                                </div>
                                <div className="text-center text-sm lg:text-xl">
                                    <h1>Dinner</h1>
                                    <h2>18:00–20:00</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 lg:py-10">
                <div>
                    <div className="relative">
                        <img src={Orange} alt="" className="absolute lg:-top-30 -top-20 left-20 lg:left-130 w-32 lg:w-52 " />
                    </div>

                    <div className="grid lg:grid-cols-[2fr_2fr] gap-5 lg:gap-10  px-8 mt-50">
                        <div>
                            <img src={plate} alt="" className="top-0 left-10" />
                        </div>
                        <p className="lg:text-2xl lg:font-mono  lg:mt-50">We can be contacted via
                            email <span className="text-[#5E6600]">info@foodzero.com</span>
                            or telephone on <span className="text-[#5E6600]">+86 852 346 000</span></p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 items-center justify-center lg:py-30 lg:gap-5 py-10 px-4">
                    <div className=" grid lg:gap-5 gap-10 items-center justify-center w-full">
                        <h1 className="text-[#233000] lg:text-2xl text-sm lg:font-semibold px-4">We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</h1>
                        <div className="text-center py-5 lg:py-0">
                            <button className="border text-center w-52 lg:px-8 px-0 py-2 lg:text-2xl">View in maps</button>

                        </div>
                    </div>
                    <div>
                        <img src={resort} alt="" />
                    </div>
                </div>
                <div className="py-10 bg-[#EBF0E4] ">
                    <div className="relative px-8">
                        <div >
                            <img src={Mint} alt="" className="absolute lg:-top-8 w-32 -top-8  lg:w-92" />
                        </div>
                        <div className="text-center mt-10 py-10">
                            <h1 className="lg:text-7xl text-3xl text-center">Make a Reservation</h1>
                            <h1 className="">Get in touch with restaurant</h1>
                        </div>
                    </div>
                    <div className="grid lg:gap-10 gap-5 px-10 lg:py-20 py-10 max-w-4xl mx-auto">
                        <div className="lg:flex grid gap-5">
                            <input type="text" placeholder="First Name" className="border-2 w-full py-4 px-4 placeholder:text-black placeholder:font-bold" />
                            <input type="text" placeholder="Last Name" className="border-2 py-4 px-2 w-full placeholder:text-black placeholder:font-bold" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address" className="border-2 py-4 px-2 placeholder:text-black w-full placeholder:font-bold" />
                        </div>
                        <div>
                            <input type="number" placeholder="Phone" className="border-2 py-4 px-2 w-full placeholder:text-black placeholder:font-bold" />
                        </div>
                        <div className="lg:flex grid gap-5">
                            <input type="text" placeholder="16/22/2021" className="border-2 w-full py-4 px-4 placeholder:text-black placeholder:font-bold" />
                            <select className="border-2 font-bold py-4 px-2 w-full" >
                                <option value="6.00pm " className="">6.00pm</option>
                                <option value="6.00pm">7.00pm</option>
                                <option value="6.00pm">8.00pm</option>
                            </select>
                        </div>
                        <div>
                            <select className="border-2 py-4 px-2 w-full font-bold" >
                                <option value="2 Persons">2 Persons</option>
                                <option value="6.00pm">4 Persons</option>
                                <option value="6.00pm">10 Persons</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button className="text-white lg:w-42 py-2 lg:py-4 px-4 bg-[#5E6600]">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Touch