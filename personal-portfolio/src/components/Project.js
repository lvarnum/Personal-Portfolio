import React from "react";

function Project(props) {
    const { name, picture, repo, site } = props;
    return (
        <div className="card project">
            <h3 className="card-header bg-primary text-white">{name}</h3>
            <img style={{ height: "200px", width: "100%", display: "block" }} src={picture} alt="Project" />
            <div className="card-body bg-dark">
                <div className="row">
                    <div className="col mb-3">
                        <a className="link text-white mr-3" target="_b" href={repo}><i className="fa fa-github icon repo pr-3" /></a>
                        <a className="link text-white" target="_b" href={site}><i className="fa fa-desktop icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;