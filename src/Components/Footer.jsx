import React from "react";
import github from "./github.png"; 
import slack from "./slack.png"; 

function Footer() {
    return (
        <div className="footer">
            <a href="">
                <img src={slack} alt="slack" />
            </a>
            <a href="">
                <img src={github} alt="github" />
            </a>
        </div>
    );
}

export default Footer;