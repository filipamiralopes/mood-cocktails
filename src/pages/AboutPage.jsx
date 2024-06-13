import React from 'react';
import GitImg from '../image/github.png'
import AboutImg from '../image/about-us.png'
const AboutPage = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <div className="about-container-detail">
       <h1>About Mood Cocktails</h1>
        <p>
        Welcome to Mood Cocktails, where every sip tells a story. Born in the fiery 
        pits of a weekend coding bootcamp, three spirited adventurers (literally) 
        mixed their skills to create an app that matches your mood with the perfect cocktail.
      </p>
      {/* <p>
        It all started on a rainy afternoon when the idea struck like a lemon twist 
        in a dry martini. Why not blend the art of mixology with the science of software? 
        The rest, as they say, is history.
      </p> */}
      {/* <p>
        Between debugging and distilling, we've poured our passion into this project 
        to ensure that whether you're feeling joyful, melancholic, or downright mysterious, 
        there’s a cocktail waiting to match your mood.
      </p> */}
      </div>
      
     
      <div className="about-team">
      
      <h1>Meet the Creators</h1>

        <div className="team-member1">
        <h4><a href="https://github.com/filipamiralopes"><img src={GitImg} alt="GitHub Logo" className='git-logo'/></a> Filipa Lopes</h4>
        </div>

        <div className="team-member2">
        <h4> <a href="https://github.com/farnoushdf"><img src={GitImg} alt="GitHub Logo" className='git-logo'/></a> Farnoush Daliran</h4>
         </div>
        
        <div className="team-member3">
        <h4><a href="https://github.com/dalfang"><img src={GitImg} alt="GitHub Logo" className='git-logo'/></a>  Dalin Fangloy</h4>
          </div>
        
      </div>
     
    </div>
    {/* <div className='about-image'>
        <img src={AboutImg} alt="About Image" />
      </div> */}
    </div>
  );

};

export default AboutPage;
