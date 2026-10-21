import { FaFacebook } from "react-icons/fa6";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

function Footer() {
    return (
        <div className="bg-[#233000] max-w-7xl mx-auto  text-center text-white py-10">
            <div className="py-10 lg:py-20 px-8">
                <div className="grid lg:grid-cols-[1fr_1fr_3fr] gap-5 justify-center items-start">
                    <div className="">
                        <h1 className="lg:text-6xl text-3xl  text-white font-sans">Food Zero</h1>
                    </div>
                    <div className="grid gap-5">
                        <h1 className="text-xl lg:text-3xl">Contact</h1>
                        <div>
                            <h1 className="text-sm lg:text-base">+1+86 852 346 000</h1>
                            <h1 className="text-sm lg:text-base"> info@foodzero.com</h1>
                        </div>
                        <div>
                            <h1 className="text-sm lg:text-base">1959 Sepulveda Blvd.</h1>
                            <h1 className="text-sm lg:text-base"> Culver City, CA, 90230</h1>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <h1 className="text-xl lg:text-3xl font-mono">Never Miss a Recipe</h1>
                        <div className="lg:flex gap-3 grid items-center justify-center">
                            <div className="">
                                <input type="email" placeholder="Email Address" className="border py-4 px-8 w-52 lg:w-82" />
                            </div>
                            <div className="bg-[#5E6600]">
                                <button className="text-2xl font-mono  px-4 py-4">Subscribe</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <hr className="border-t-2 border-dotted border-gray-400" />
            <div className="px-6 lg:px-30 py-8 lg:flex grid gap-5 justify-between items-center ">
                <div>
                    <h1>© 2020 Zero Inc. All rights Reserved</h1>
                </div>
                <div className="grid grid-cols-4 justify-center lg:gap-5 mx-auto gap-3 items-center">
                    <FiInstagram />
                    <FiTwitter />
                    <FaFacebook />
                    <FiYoutube />
                </div>
            </div>
        </div >
    )
}

export default Footer;