import React from "react";
import AboutCSS from "./About.module.css";

function About() {
    const locations = [
        {
            key: 1,
            name: 'location1',
            description: 'desc1',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            key: 2,
            name: 'location2',
            description: 'desc2',
            imgSrc: 'https://via.placeholder.com/150',
        },
        {
            key: 3,
            name: 'location3',
            description: 'desc3',
            imgSrc: 'https://via.placeholder.com/150',
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