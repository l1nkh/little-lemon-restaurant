import React from "react";
import AboutCSS from "./About.module.css";

function About() {
    const locations = [
        {
            key: 1,
            name: 'Lisbon',
            description: 'desc1',
            imgSrc: 'https://images.unsplash.com/photo-1693603020248-1a6f564443ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 2,
            name: 'Florence',
            description: 'desc2',
            imgSrc: 'https://images.unsplash.com/photo-1663323744937-421f66782e03?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            key: 3,
            name: 'Mykonos',
            description: 'desc3',
            imgSrc: 'https://images.unsplash.com/photo-1602941375256-e21ec752434f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <>
            <section className={AboutCSS.aboutSection}>
                <section className={AboutCSS.identitySection}>
                    <h1 className={AboutCSS.h1}>Little Lemon is a modern twist on traditional Mediterranean recipes</h1>
                    <p className={AboutCSS.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        tempor a odio sed dapibus. Phasellus nibh purus, euismod id nibh eu,
                        eleifend hendrerit dui. Aliquam consequat consectetur dui, pulvinar
                        ultricies sapien efficitur tempus. Fusce accumsan auctor diam nec
                        commodo. Nullam dignissim sit amet felis et tempor.Suspendisse potenti.
                        Phasellus cursus quam in ex imperdiet, vel elementum ligula vehicula.
                        Curabitur finibus erat venenatis facilisis finibus.</p>
                </section>

                <section className={AboutCSS.locationsSection}>
                    <h3 className={AboutCSS.h3}>Visit us at any of our locations</h3>
                    <ul className={AboutCSS.row}>
                        {locations.map(location => (
                            <li className={AboutCSS.item} key={location.key}>
                                <img src={location.imgSrc} alt={location.name} />
                                <p>{location.name}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    );
}

export default About;