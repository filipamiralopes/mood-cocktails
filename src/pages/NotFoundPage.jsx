import React from "react";
import { useNavigate } from "react-router-dom";
import spilled from "../image/spilled.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // navigate to the home page
  };

  return (
      <div className="not-found">
        <img src={spilled} alt="spilled drink" style={{ width: "250px" }} />
        <h1>404</h1>
        <p>Cocktail Not Found... maybe it spilled!</p>
        <button onClick={handleGoHome}>Back to Bar</button>
      </div>
  );
};

export default NotFoundPage;
