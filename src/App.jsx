import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CocktailList from "./pages/CocktailList";
import CocktailDetail from "./pages/CocktailDetail";
import YourTable from "./pages/YourTable";

function App() {
  const [orderedCocktails, setOrderedCockails] = useState([]);

  function handleOrder(cocktail) {
    setOrderedCockails([...orderedCocktails, cocktail]);
  }

  return (
    <>
      <Navbar />
      <SideBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailList />} />
        <Route path="/cocktails/:cocktailId" element={<CocktailDetail />} />
        <Route
          path="/cocktails/:cocktailId"
          element={<CocktailDetail handleOrder={handleOrder} />}
        />
        <Route
          path="/your-table"
          element={<YourTable orderedCocktails={orderedCocktails} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
