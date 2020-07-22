import React from "react";
import Resume from "../utils/LaynahResume.pdf";

function Resources() {
    return (
        <div className="container bg-primary resources">
            <div className="row">
                <div className="col mb-3">
                    <h2 className="text-white">- My Resources -</h2>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                    <a className="text-white link" href="https://github.com/lvarnum" target="_b">
                        <i className="fa fa-github text-white mr-3 icon" />https://github.com/lvarnum</a>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                    <a className="text-white link" href="https://www.linkedin.com/in/laynah-varnum-6a6ba3178/" target="_b">
                        <i className="fa fa-linkedin-square text-white mr-3 icon" />https://www.linkedin.com/in/laynah-varnum-6a6ba3178/</a>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                    <a className="text-white link" href={Resume} target="_b">
                        <i className="fa fa-file-pdf-o text-white mr-3 icon" />Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Resources;