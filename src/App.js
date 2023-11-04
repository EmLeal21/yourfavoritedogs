import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import DogImages from "./pages/DogImages/DogImages";
import Favorites from "./pages/Favorites/Favorites";
import DogssBreeds from './pages/DogsBreeds/DogssBreeds'
import SingleCat from './pages/SingleDog/SingleDog'
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cutedogs" element={<DogImages />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/dogsbreeds" element={<DogssBreeds/>}/>
          <Route path="/:name" element={<SingleCat/>}/>
        </Routes>
  
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
