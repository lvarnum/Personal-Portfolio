import React from "react";
import Profile from "../utils/images/profile.jpg";

function AboutMe() {
    return (
        <div className="container about bg-dark">
            <div className="row">
                <div className="col mb-3">
                    <h2 className="text-white">- About Me -</h2>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                    <img className="profile" src={Profile} alt="Profile" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="text-white">
                        I was born and raised in Tucson, AZ. I am currently studying Computer Science at the University of Arizona and
                        have recently completed a Web Development program. I enjoy designing and creating applications that can make a
                        difference in people's lives. I am always excited to develop new ideas and gain more knowledge.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;