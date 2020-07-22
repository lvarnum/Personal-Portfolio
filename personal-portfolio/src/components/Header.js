import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/home">Laynah Varnum</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {(location.pathname === "/" || location.pathname === "/home")
                            ? <a className="nav-link active" href="/home">Home</a>
                            : <a className="nav-link" href="/home">Home</a>
                        }
                    </li>
                    <li className="nav-item">
                        {location.pathname === "/portfolio"
                            ? <a className="nav-link active" href="/portfolio">Portfolio</a>
                            : <a className="nav-link" href="/portfolio">Portfolio</a>
                        }
                    </li>
                    <li className="nav-item">
                        {location.pathname === "/contact"
                            ? <a className="nav-link active" href="/contact">Contact</a>
                            : <a className="nav-link" href="/contact">Contact</a>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;