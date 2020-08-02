import React from "react";
import { Project } from "../components";
import Weather from "../utils/images/weatherDashboard.png";
import Recipe from "../utils/images/recipeSearch.png";
import LeadAstray from "../utils/images/leadastray.png";
import Spiral from "../utils/images/spiral.png";

function Portfolio() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid projects">
                <div className="container text-center">
                    <h1 className="display-5 text-white">Laynah's Project Portfolio</h1>
                    <hr />
                </div>
            </div>
            <div className="container portfolio">
                <div className="row">
                    <div className="col">
                        <Project
                            name="Weather Dashboard"
                            picture={Weather}
                            repo="https://github.com/lvarnum/Weather-Dashboard"
                            site="https://lvarnum.github.io/Weather-Dashboard/"
                        />
                    </div>
                    <div className="col">
                        <Project
                            name="Recipe Search"
                            picture={Recipe}
                            repo="https://github.com/lvarnum/Recipe-Search"
                            site="https://lvarnum.github.io/Recipe-Search/"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Project
                            name="Lead Astray"
                            picture={LeadAstray}
                            repo="https://github.com/lvarnum/Lead-Astray"
                            site="https://frozen-crag-01668.herokuapp.com/"
                        />
                    </div>
                    <div className="col">
                        <Project
                            name="Spiral"
                            picture={Spiral}
                            repo="https://github.com/lvarnum/Spiral"
                            site="https://spiral-planner.herokuapp.com/"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;