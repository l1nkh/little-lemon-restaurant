import React from "react";
import NavCSS from "./Nav.module.css"

function Nav() {
    const leftSideLinks = [
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
            name: 'Press',
            href: '#'
        },
        {
            id: 4,
            name: 'Contact',
            href: '#'
        },
    ];

    const rightSideLinks = [
        {
            id: 1,
            name: 'Reservations',
            href: '#'
        },
        {
            id: 2,
            name: 'Instagram',
            href: '#',
            src: ''
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
                            <li key={page.id} className="nav-item">
                                <a className="nav-link" href={page.href}>{page.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-center">
                        <a href='#'>
                            <img src="lemonlogo.png" alt="Restaurant Logo" className={NavCSS.brandLogo} />
                        </a>
                    </div>
                    <ul className={`nav nav-underline ${NavCSS.navRight}`}>
                        {rightSideLinks.map(page => (
                            <li key={page.id} className="nav-item">
                                <a className="nav-link" href={page.href}>
                                    {page.name === 'Instagram' ? <img src={page.src} alt="Instagram Logo" /> : page.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</div>
</nav>

export default Nav;