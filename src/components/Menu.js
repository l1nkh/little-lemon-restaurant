import React from "react";
import MenuCSS from "./Menu.module.css";

function Menu() {
    const menu = [
        {
            key: 1,
            name: 'dish1',
            description: 'desc1',
            imgSrc: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 2,
            name: 'dish2',
            description: 'desc2',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            key: 3,
            name: 'dish3',
            description: 'desc3',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            key: 4,
            name: 'dish4',
            description: 'desc4',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            key: 5,
            name: 'dish5',
            description: 'desc5',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            key: 6,
            name: 'dish6',
            description: 'desc6',
            imgSrc: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <section className={MenuCSS.menuSection}>
            <h1 className={MenuCSS.h1}>Some of Our Favorites</h1>
            <ul className={MenuCSS.row}>
                {menu.map(dish => (
                    <li className={MenuCSS.item} key={dish.key}>
                        <img src={dish.imgSrc} alt={dish.name} />
                        <p>{dish.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Menu;
