import React from "react";
import HomeText from "../HomeText";
import Gallery from "../HomeCarousel";

const Home = () => {
    /*
    - Si on est sur home => hide le boutton home faire apparaitre les liens avec anim
    - Si on passe sur un autre composant hide liens / afficher home 
    */

    console.log(document.getElementById(''));
    return(
        <>
            <HomeText />
            <Gallery />
        </>
    )
}

export default Home;