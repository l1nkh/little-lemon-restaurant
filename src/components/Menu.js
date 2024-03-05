import React from "react";
import MenuCSS from "./Menu.module.css";

function Menu() {
    const menu = [
        {
            key: 1,
            name: 'Pizza',
            description: 'desc1',
            imgSrc: 'https://images.unsplash.com/photo-1564936281291-294551497d81?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 2,
            name: 'Salad',
            description: 'desc2',
            imgSrc: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 3,
            name: 'Soup',
            description: 'desc3',
            imgSrc: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 4,
            name: 'Veggie Bowl',
            description: 'desc4',
            imgSrc: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 5,
            name: 'Pancaques',
            description: 'desc5',
            imgSrc: 'https://plus.unsplash.com/premium_photo-1707757442396-8784df68d028?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 6,
            name: 'Steak',
            description: 'desc6',
            imgSrc: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
