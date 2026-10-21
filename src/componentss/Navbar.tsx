import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import lee from "../assets/lee.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#233000] text-white max-w-7xl mx-auto">
            <div className="lg:flex lg:justify-between lg:p-8 p-4 grid gap-5 ">
                <div className="lg:grid lg:grid-cols-2 px-5 lg:px-0  items-center flex lg:w-auto w-full justify-between gap-0 lg:justify-center lg:gap-5">
                    <div className="border-t border-b ">
                        <h1 className="lg:text-3xl font-sans text-center font-bold  p-2">FoodZero</h1>
                    </div>
                    {/* hamburger */}
                    {/* <div className="lg:ml-10 "> */}
                    <button
                        onClick={() => {
                            console.log("Menu clicked");

                            setIsOpen(true);
                        }}
                        className="text-2xl cursor-pointer"
                        aria-label="Open menu"

                    >
                        <FiMenu className="text-center text-xl cursor-pointer text-base" />

                    </button>
                    {/* </div> */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 z-[60] bg-cover max-w-7xl mx-auto bg-center bg-no-repeat flex flex-col justify-center px-8 lg:px-20" style={{ backgroundImage: `url(${lee})` }}
                        >
                            <div className="absolute inset-0 bg-black/50    "></div>
                            <button
                                className="absolute top-6 right-6 z-20 text-white text-3xl"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close menu"
                            >
                                <FiX />
                            </button>

                            {/* main */}

                            <div className="relative z-10 text-white space-y-2 lg:space-y-5">
                                <NavLink to="/" onClick={() => setIsOpen(false)}
                                    className="block text-4xl font-mono lg:text-6xl font-bold">
                                    <span>.</span> Home
                                </NavLink>
                                <NavLink to="/menu" onClick={() => setIsOpen(false)}
                                    className="block text-4xl lg:text-6xl font-bold font-mono">
                                    <span>.</span> Menu
                                </NavLink>
                                <h1 className="text-[#9CAA00] block text-4xl lg:text-6xl font-bold font-mono"> <span>.</span> Blogs</h1>

                                <div className="grid ml-20">
                                    <NavLink to="/blogone" onClick={() => setIsOpen(false)}
                                        className="block text-sm lg:text-xl  font-mono">
                                        <span>1.</span>  BlogOne
                                    </NavLink>
                                    <NavLink to="/blogtwo" onClick={() => setIsOpen(false)}
                                        className="block text-sm lg:text-xl  font-mono">
                                        <span>2.</span>  BlogTwo
                                    </NavLink>
                                    <NavLink to="/grids" onClick={() => setIsOpen(false)}
                                        className="block text-sm lg:text-xl  font-mono">
                                        <span>3.</span> Grids
                                    </NavLink>
                                </div>
                                <NavLink to="/whoweare" onClick={() => setIsOpen(false)}
                                    className="block text-4xl lg:text-5xl font-bold font-mono">
                                    <span>.</span> About
                                </NavLink>
                                <NavLink to="/goat" onClick={() => setIsOpen(false)}
                                    className="block text-4xl lg:text-5xl font-bold font-mono">
                                    <span>.</span> Reviews
                                </NavLink> <NavLink to="/goatmeal" onClick={() => setIsOpen(false)}
                                    className="block text-4xl lg:text-5xl font-bold font-mono">
                                    <span>.</span> Procedure
                                </NavLink>
                                <NavLink to="/sea" onClick={() => setIsOpen(false)}
                                    className="block text-4xl lg:text-5xl font-bold font-mono">
                                    <span>.</span> Sea Foods
                                </NavLink>
                                <NavLink to="/touch" onClick={() => setIsOpen(false)}
                                    className="block text-4xl lg:text-5xl font-bold font-mono">
                                    <span>.</span> Contact
                                </NavLink>
                            </div>
                            <div className="lg:relative max-w-xl hidden lg:block">
                                <div className="lg:absolute lg:-right-100 lg:-top-60">
                                    <h1 className="text-2xl ">Contact</h1>
                                    <hr className="border-1 text-white border-white border-dotted w-50" />
                                    <div className="py-4">
                                        <h1>+86 852 346 000</h1>
                                        <h1>info@foodzero.com</h1>
                                    </div>
                                    <div className="py-4">
                                        <h1>1959 Sepulveda Blvd.</h1>
                                        <h1>  Culver City, CA, 90230</h1>
                                    </div>
                                    <div className="flex gap-2 py-4">
                                        <FaInstagram className="" />
                                        <FaTwitter />
                                        <FaFacebook />
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="lg:block hidden">
                    <div className="flex  justify-between items-center lg:gap-5 ">
                        <h1 className="text-xs lg:text-base">+86 852 346 000</h1>
                        <h1 className="lg:p-3 border p-1 text-xs lg:text-base border-white">Reservations</h1>
                    </div>
                </div>
            </div>

        </nav >
    )
}

export default Navbar;