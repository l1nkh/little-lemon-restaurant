// Main.js
import React from "react";
import Hero from "./Hero"
import About from "./About"
import Menu from "./Menu"
import Press from "./Press"
import BookTable from "./BookTable";
import MainCSS from "./Main.module.css"
import { Element } from 'react-scroll';

function Main() {
    return (
        <main>
            <Hero />
            <Element name="about"><About /></Element>
            <Element name="menu"><Menu /></Element>
            <Element name="press"><Press /></Element>
            <Element name="booktable"><BookTable /></Element>
        </main>
    );
}

export default Main;