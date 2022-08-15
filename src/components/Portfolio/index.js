import React from 'react';
import spotifyNow from "../../assets/images/spotifynow.jpeg";
import creativeDishes from "../../assets/images/creativedishes.png"
function Portfolio() {

    return(
        <section id="portfolio">
            <img src={spotifyNow} alt="spotify now" className='img-thumbnail mx-1'/>
            <img src={creativeDishes} alt="creative dishes" className='img-thumbnail mx-1'/>
        </section>
    )
}

export default Portfolio;