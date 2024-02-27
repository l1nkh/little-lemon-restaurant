import React from "react";

function Nav(){
    const pages = [
        {
            id: 1,
            name: 'Home',
            href: '#'
        },
        {
            id: 2,
            name: 'Menu',
            href: '#'
        },
        {
            id: 3,
            name: 'Reservations',
            href: '#'
        },
        {
            id: 4,
            name: 'Contact',
            href: '#'
        },
    ];

    return(
        <nav>
            <ul>
                {pages.map(page => (
                    <li key={page.id}>
                        <a href={page.href}>{page.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;  