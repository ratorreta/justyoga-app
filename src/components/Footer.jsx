import React from "react";

function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">
            <p>JUST YOGA ™</p>
            <p>Built and designed by :   © ROSE ANNE TORRETA {year}</p>
        </div>
    )
}

export default Footer;