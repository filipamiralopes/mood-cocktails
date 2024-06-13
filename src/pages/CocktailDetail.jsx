import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CocktailCard from "../components/CocktailCard";
import spilled from "../image/spilled.png";

const CocktailDetail = ({
  cocktails,
  handleOrder,
  orderedCocktails,
  handleDelete,
}) => {
  const navigate = useNavigate();
  const { cocktailId } = useParams();
  const filteredCocktail = cocktails.find((oneCocktail) => {
    if (oneCocktail.id == cocktailId) {
      return true;
    }
  });

  const handleGoHome = () => {
    navigate("/"); // navigate to the home page
  };

  if (!filteredCocktail) {
    return (
      <div className="not-found">
        <img src={spilled} alt="spilled drink" style={{ width: "250px" }} />
        <h3>We are sorry but we are missing ingredients for this cocktail...</h3>
        <button onClick={handleGoHome}>Back to Bar</button>
      </div>
    );
  }

  return (
    <div className="cocktail-detail">
      <CocktailCard cocktail={filteredCocktail} />
      <div className="cocktail-detail-buttons">
        {!orderedCocktails.includes(filteredCocktail) ? (
          <button
            onClick={() => {
              handleOrder(filteredCocktail);
            }}
          >
            Order
          </button>
        ) : (
          <button>Ordered ✔</button>
        )}
        <Link to="/your-table">
          <button>Check your orders</button>
        </Link>
        {!filteredCocktail.isUserCreated ? null : (
          <Link to={`/edit-cocktail/${filteredCocktail.id}`}>
            <button>Edit</button>
          </Link>
        )}
        {!filteredCocktail.isUserCreated ? null : (
          <button onClick={() => handleDelete(filteredCocktail.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default CocktailDetail;
