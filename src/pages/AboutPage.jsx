import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-us-container">
      <h1>About Mood Cocktails</h1>
      <p>
        Welcome to Mood Cocktails, where every sip tells a story. Born in the fiery 
        pits of a weekend coding bootcamp, three spirited adventurers (literally) 
        mixed their skills to create an app that matches your mood with the perfect cocktail.
      </p>
      <p>
        It all started on a rainy afternoon when the idea struck like a lemon twist 
        in a dry martini. Why not blend the art of mixology with the science of software? 
        The rest, as they say, is history.
      </p>
      <p>
        Between debugging and distilling, we've poured our passion into this project 
        to ensure that whether you're feeling joyful, melancholic, or downright mysterious, 
        there’s a cocktail waiting to match your mood.
      </p>
      <div className="team">

        <div className="team-member1">
        <h2>Meet the Creators</h2>
        <h4>Filipa Lopes</h4>
        <a href ="https://github.com/filipamiralopes" >GitHub</a> 
        </div>

        <div className="team-member2">
        <h4>Farnoush Daliran</h4>
        <a href ="https://github.com/farnoushdf" >GitHub</a>    
        </div>
        <div className="team-member">Bob</div>

        <div className="team-member3">
        <h4>Dalin Fangloy</h4>
        <a href ="https://github.com/dalfang" >GitHub</a></div>
      </div>
    </div>
  );
};

export default AboutPage;
