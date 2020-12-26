import React from "react";
import Resume from "../utils/LaynahResume.pdf";

function Intro() {
    return (
        <div className="jumbotron jumbotron-fluid text-center text-white intro">
            <div className="container">
                <h1 className="display-4 text-white">Laynah Varnum</h1>
                <p className="lead">~ A Full Stack Web Developer ~</p>
                <hr />
                <a className="text-white link" href="https://www.linkedin.com/in/laynah-varnum-6a6ba3178/" target="_b">
                    <i className="fa fa-linkedin-square text-white mr-3 icon" /></a>
                <a className="text-white link" href="https://github.com/lvarnum" target="_b">
                    <i className="fa fa-github text-white mr-3 icon" /></a>
                <a className="text-white link" href={Resume} target="_b">
                    <i className="fa fa-file-pdf-o text-white mr-3 icon" /></a>
            </div>
        </div>
    )
}

export default Intro;