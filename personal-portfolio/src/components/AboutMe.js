import React from "react";
import Profile from "../utils/images/profile.jpg";

function AboutMe() {
    return (
        <div className="container about">
            <div className="row">
                <div className="col mb-3">
                    <h2>- About Me -</h2>
                </div>
            </div>
            <div className="row">
                <div className="col mb-3">
                    <img className="profile" src={Profile} alt="Profile" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <p style={{ fontSize: "16px" }}>
                        I was born and raised in Tucson, AZ. I am currently studying Computer Science, and
                        have recently completed the University of Arizona's Full Stack Web Development Bootcamp. I enjoy designing and
                        creating applications that can make a difference in people's lives. I have a passion for frontend design, and I
                        am always excited to pursue new ideas. I love to learn and can easily adapt to new situations. 
                        To view some of my work, visit my <a style={{ textDecoration: "underline" }} href="/portfolio">portfolio page.</a>
                    </p>
                </div>
            </div>
            <div className="row email bg-primary">
                <div className="col">
                    <h4 className="text-white">- Contact -</h4>
                    <p className="text-white"><i className="fa fa-envelope-o mr-3 mb-3" />laynah.varnum98@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;