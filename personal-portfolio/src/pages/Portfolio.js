import React from "react";
import { Project } from "../components";
import WorkDay from "../utils/images/workDay.png";
import Weather from "../utils/images/weatherDashboard.png";
import Budget from "../utils/images/budgetTracker.png";
import Recipe from "../utils/images/recipeSearch.png";

function Portfolio() {
    return (
        <div className="container portfolio">
            <div className="row">
                <div className="col">
                    <Project
                        name="Work Day Scheduler"
                        picture={WorkDay}
                        repo="https://github.com/lvarnum/Work-Day-Scheduler"
                        site="https://lvarnum.github.io/Work-Day-Scheduler/"
                    />
                </div>
                <div className="col">
                    <Project
                        name="Weather Dashboard"
                        picture={Weather}
                        repo="https://github.com/lvarnum/Weather-Dashboard"
                        site="https://lvarnum.github.io/Weather-Dashboard/"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Project
                        name="Budget Tracker"
                        picture={Budget}
                        repo="https://github.com/lvarnum/Budget-Tracker"
                        site="https://lvarnum.github.io/Budget-Tracker/"
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
        </div>
    )
}

export default Portfolio;