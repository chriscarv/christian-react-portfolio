import React from 'react';
import spotifyNow from "../../assets/images/spotifynow.jpeg";
import creativeDishes from "../../assets/images/creativedishes.png"
function Portfolio() {

    return(
        <section >
            <h1>Portfolio</h1>
             <h2>Spotify Now</h2>   
            <a href="https://spotify-wrapped-now.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={spotifyNow} alt="spotify now" className='img-thumbnail mx-1'/>
            </a>
            <h2>Creative Dishes</h2>
            <a href="https://chriscarv.github.io/dcl/" target="_blank"  rel="noreferrer">
            <img src={creativeDishes} alt="creative dishes" className='img-thumbnail mx-1'/>
            </a>
        </section>
    )
}

export default Portfolio;