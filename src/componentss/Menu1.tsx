import menubg from "../assets/menubg.png";
function Menu1() {
    return (
        <div className=" relative bg-cover bg-center bg-no-repeat h-screen lg:min-h-screen pt-25" style={{ backgroundImage: `url(${menubg})` }}>
            <div className="w-full inset-0 bg-black/50 absolute">
                <h1 className=" max-w-2xl mr-auto lg:text-8xl text-4xl px-10 text-white absolute top-50">View Our New Menu</h1>
                <h2 className="max-w-2xl mr-auto lg:text-xl text-sm  text-white px-10 absolute top-75 lg:top-105">The freshest ingredients for you every day</h2>
            </div>
        </div>
    )
}

export default Menu1;