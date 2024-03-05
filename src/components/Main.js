// Main.js
import React from "react";
import Hero from "./Hero"
import About from "./About"
import Menu from "./Menu"
import Press from "./Press"
import BookTable from "./BookTable";
import MainCSS from "./Main.module.css"

function Main() {
    return (
        <main>
            <Hero />
            <About />
            <Menu />
            <Press />
            <BookTable id="bookTable"/>
        </main>
    );
}

export default Main;