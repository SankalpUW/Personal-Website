import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer(){
    return (
    <div className="footer">
        <div className="socialMedia">
        <a href="https://github.com/SankalpUW" target="_blank"><GitHubIcon /></a>
        <a href="mailto: skodande@uwaterloo.ca" target="_blank"><EmailIcon /></a>
        </div>
        <p> &copy; Sankalp Kodandera 2023 </p>
    </div>
    );
}

export default Footer;