function Home5() {
    return (
        <div className="lg:py-20 py-5 bg-[#EBF0E4]">
            <div className="grid gap-5">
                <h1 className="lg:text-7xl text-5xl font-semibold text-center">Make a Reservation</h1>
                <h2 className="text-center pb-10">Get in touch with restaurant</h2>
                <div className="grid lg:grid-cols-3 items-center justify-center px-4 gap-5">
                    <div className="text-center ">
                        <input type="date" placeholder="16/22/2021" className="border-2 w-52 lg:w-72 py-3 px-2" />
                    </div>

                    <div className="text-center">
                        <select className="border-2 w-52 lg:w-76 py-3 px-2">
                            <option value="">6.00 pm</option>
                            <option value="">7.00 pm</option>
                            <option value="">8.00 pm</option>
                            <option value="">9.00 pm</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <select className="border-2 w-52 lg:w-72 py-3 px-2">
                            <option value="">2 Person</option>
                            <option value="">4 Person</option>
                            <option value="">5 Person</option>
                            <option value="">10 Person</option>

                        </select>
                    </div>
                </div>

            </div>
            <div className="text-center py-15">
                <button className="text-white py-4 px-12 bg-[#233000]">Book Now</button>
            </div>
        </div>
    )
}

export default Home5;