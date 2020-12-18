import React from "react";
import { Project } from "../components";
import Weather from "../utils/images/weatherDashboard.png";
import Recipe from "../utils/images/recipeSearch.png";
import LeadAstray from "../utils/images/leadastray.png";
import Work from "../utils/images/workDay.png";

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
                            name="Work Day Scheduler"
                            picture={Work}
                            repo="https://github.com/lvarnum/Work-Day-Scheduler"
                            site="https://lvarnum.github.io/Work-Day-Scheduler/"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;