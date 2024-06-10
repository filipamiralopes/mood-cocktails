import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // navigate to the home page
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Cocktail Not Found</h2>
        <p>Looks like this cocktail doesn't exist... maybe it spilled!</p>
        <button onClick={handleGoHome}>Back to Bar</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
