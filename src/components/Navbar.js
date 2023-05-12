import React, { useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar(){
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button 
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                    >
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                {/* <Link to="/resume"> Resume </Link>  */}
                <a href="https://drive.google.com/file/d/1H8KGrGqa8Q4_buFpJ2ppnKaukpAykjaV/view?usp=sharing" target="_blank"> Resume </a>
            </div>
        </div>
    );
}

export default Navbar;