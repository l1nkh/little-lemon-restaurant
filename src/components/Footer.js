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
                    Little Lemon Restaurant<br />
                    Address, Address<br />
                    City, Country<br />
                    Phone Number
                </div>
                <div>
                    Little Lemon Restaurant<br />
                    Address, Address<br />
                    City, Country<br />
                    Phone Number
                </div>
                <div>
                    Little Lemon Restaurant<br />
                    Address, Address<br />
                    City, Country<br />
                    Phone Number
                </div>
                <a href='#'>
                    <img src="lemonlogo.png" alt="Restaurant Logo" className={FooterCSS.brandLogo} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;