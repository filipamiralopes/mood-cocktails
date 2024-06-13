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
import EditCocktail from "./pages/EditCocktail";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import axios from "axios";
import GetRandomCocktail from "./pages/GetRandomCocktail";
import { API_URL } from "./config";
import { useNavigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserCocktail from "./pages/UserCocktail";

function App() {
  const [cocktails, setCocktails] = useState([]); 
  const [orderedCocktails, setOrderedCockails] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const [mood, setMood] = useState("");
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

  const handleDelete = async (id) => {
    try {  
      await axios.delete(`${API_URL}/drinks/${id}`);
      setCocktails(cocktails.filter(cocktail => cocktail.id !== id));
      setOrderedCockails(orderedCocktails.filter(cocktail => cocktail.id !== id));
      nav("/cocktails");
    } catch (error) {
      console.log( error);
      
    }
  }

  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <div className="body-page">
        <SideBar currentUser={currentUser}/>

        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser} mood={mood} setMood={setMood}/>} />
          <Route
            path="/cocktails"
            element={
              <CocktailList cocktails={cocktails} setCocktails={setCocktails} />
            }
          />
          <Route
            path="/cocktails/:cocktailId"
            element={
              <CocktailDetail cocktails={cocktails} handleOrder={handleOrder} handleDelete={handleDelete} orderedCocktails={orderedCocktails}/>
            }
          />
          <Route
            path="/your-table"
            element={<YourTable orderedCocktails={orderedCocktails} />}
          />
          <Route
            path="/add-cocktail"
            element={
              <AddCocktail cocktails={cocktails} setCocktails={setCocktails} currentUser={currentUser}/>
            }
          />
          <Route path="/random-cocktail" element={<GetRandomCocktail mood={mood}/>} />
          <Route path="/edit-cocktail/:cocktailId" element={<EditCocktail cocktails={cocktails} setCocktails={setCocktails}/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/profile" element={<ProfilePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} />} />
          <Route path="/cocktails-for-you" element={<UserCocktail currentUser={currentUser} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
