import React from "react";
import NavCSS from "./Nav.module.css"
import { Link } from 'react-scroll';

function Nav() {
    const leftSideLinks = [
        {
            id: 1,
            name: 'Home',
            to: 'header'
        },
        {
            id: 2,
            name: 'About',
            to: 'about'
        },
        {
            id: 3,
            name: 'Menu',
            to: 'menu'
        },
        {
            id: 4,
            name: 'Press',
            to: 'press'
        },
    ];

    const rightSideLinks = [
        {
            id: 1,
            name: 'Reservations',
            to: 'booktable'
        },
    ];
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className={` ${NavCSS.nav} collape navbar-collapse`} id="navbarNav">
                <ul className={`nav nav-underline ${NavCSS.navLeft}`}>
                        {leftSideLinks.map(page => (
                            <li key={page.id} className={`nav-item ${NavCSS.clickable}`}>
                            <Link className="nav-link" to={page.to} spy={true} smooth={true} duration={500}>{page.name}</Link>
                        </li>
                        ))}
                    </ul>
                    <div className="nav-center">
                        <a href='#'>
                            <img className={NavCSS.brandLogo}src="lemonlogo.png" alt="Restaurant Logo" />
                        </a>
                    </div>
                    <ul className={`nav nav-underline ${NavCSS.navRight}`}>
                        {rightSideLinks.map(page => (
                            <li key={page.id} className={`nav-item ${NavCSS.clickable}`}>
                                <Link className="nav-link" to={page.to} spy={true} smooth={true} duration={500}>
                                    {page.name === 'Instagram' ? <img src={page.src} alt="Instagram Logo" /> : page.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;