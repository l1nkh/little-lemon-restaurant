// Hero.js
import React from "react";
import HeroCSS from "./Hero.module.css"

function Hero() {
    return (
        <div className={HeroCSS.hero}>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q
            =80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90
            by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" className={HeroCSS.heroImg} />
        </div>
    );
}

export default Hero;