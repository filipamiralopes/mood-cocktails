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
import { API_URL } from "./config";
import { useNavigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  const [cocktails, setCocktails] = useState([]); 
  const [orderedCocktails, setOrderedCockails] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const nav = useNavigate();

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/drinks`);
        setCocktails(data.reverse());
      } catch (error) {
        console.log(error);
      }
    };
    fetchCocktails();
  }, []);

  function handleOrder(cocktail) {
    setOrderedCockails([...orderedCocktails, cocktail]);
  }

  const handleDelete = (id) => {
    nav("/cocktails");
    setCocktails(cocktails.filter(cocktail => cocktail.id !== id));
  }

  return (
    <>
      <Navbar />
      <div className="body-page">
        <SideBar />

        <Routes>
          <Route path="/" element={<HomePage setCurrentUser={setCurrentUser} />} />
          <Route
            path="/cocktails"
            element={
              <CocktailList cocktails={cocktails} setCocktails={setCocktails} />
            }
          />
          <Route
            path="/cocktails/:cocktailId"
            element={
              <CocktailDetail cocktails={cocktails} handleOrder={handleOrder} handleDelete={handleDelete} />
            }
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/profile" element={<ProfilePage currentUser={currentUser} />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
