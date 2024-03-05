import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <a href='#'>
                <img src="lemonlogo.png" alt="Restaurant Logo" className={FooterCSS.brandLogo} />
            </a>
            <div className={FooterCSS.info}>
                <div>
                    Little Lemon Lisbon<br />
                    Lisbon, Portugal
                </div>
                <div>
                    Little Lemon Florence<br />
                    Florence, Italy
                </div>
                <div>
                    Little Lemon Mykonos<br />
                    Mykonos, Greece
                </div>
            </div>
        </footer>
    )
}

export default Footer;