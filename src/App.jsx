import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CocktailList from "./pages/CocktailList";
import CocktailDetail from "./pages/CocktailDetail";
import YourTable from "./pages/YourTable";
import AddCocktail from "./pages/AddCocktail";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import axios from "axios";
import GetRandomCocktail from "./pages/GetRandomCocktail";


function App() {
  const [cocktails, setCocktails] = useState([]); // Initialize state
  const [orderedCocktails, setOrderedCockails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const { data } = await axios.get("http://localhost:5005/drinks");
        setCocktails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCocktails();
  }, []);

  function handleOrder(cocktail) {
    setOrderedCockails([...orderedCocktails, cocktail]);
  }

  return (
    <>
      <Navbar />
      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailList cocktails={cocktails} setCocktails={setCocktails}/>} />
        <Route
          path="/cocktails/:cocktailId"
          element={<CocktailDetail cocktails={cocktails} handleOrder={handleOrder} />}
        />
        <Route
          path="/your-table"
          element={<YourTable orderedCocktails={orderedCocktails} />}
        />
        <Route
          path="/add-cocktail"
          element={
            <AddCocktail cocktails={cocktails} setCocktails={setCocktails} />
          }
        />
        <Route path="/random-cocktail" element={<GetRandomCocktail />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
