import React from "react";
import MenuCSS from "./Menu.module.css";

function Menu() {
    return (
        <section className={MenuCSS.menuSection}>
            <h1>Some of Our Favorites</h1>
            <div className={MenuCSS.row}>
                <div className={MenuCSS.item}></div>
                <div className={MenuCSS.item}></div>
                <div className={MenuCSS.item}></div>
            </div>
            <div className={MenuCSS.row}>
                <div className={MenuCSS.item}></div>
                <div className={MenuCSS.item}></div>
                <div className={MenuCSS.item}></div>
            </div>
        </section>
    );
}

export default Menu;
