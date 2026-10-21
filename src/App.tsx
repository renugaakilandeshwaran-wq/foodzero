import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentss/Home";
import Navbar from "./componentss/Navbar";
import Footer from "./componentss/Footer";
import Menu from "./pages/Menu";
import Touch from "./pages/Touch";
import Whoweare from "./pages/Whoweare";
import Grids from "./pages/Grids";
import SeaFoods from "./pages/SeaFoods";
import Blogone from "./pages/Blogone";
import Blogtwo from "./pages/Blogtwo";
import Goat from "./pages/Goat";
import GoatMeal from "./pages/GoatMeal";


function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/touch" element={<Touch />} />
            <Route path="/whoweare" element={<Whoweare />} />
            <Route path="/grids" element={<Grids />} />
            <Route path="/sea" element={<SeaFoods />} />
            <Route path="/blogone" element={<Blogone />} />
            <Route path="/blogtwo" element={<Blogtwo />} />
            <Route path="/goat" element={<Goat />} />
            <Route path="/goatmeal" element={<GoatMeal />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </>
  )
}

export default App;