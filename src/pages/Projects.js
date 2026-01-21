import React, { useState } from "react";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./Projects.scss";

const Projects = () => {
    const [openPersonal, setOpenPersonal] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className="projects-title">
                <div className="projects">
                    <p className="pro">PRO-</p>
                    <p className="jects">JECTS</p>
                </div>
                <div className="menu-bar">
                    <span className="stay" onClick={() => navigate("/stay")}>
                        STAY <GoChevronRight />
                    </span>
                    <span className="resty"
                    onClick={() => navigate("/resty")}>
                        RESTY <GoChevronRight />
                    </span>
                    <div
                        className="personal"
                        onClick={() => setOpenPersonal((p) => !p)}
                    >
                        Personal Project{" "}
                        {openPersonal ? <GoChevronDown /> : <GoChevronRight />}
                    </div>

                    {openPersonal && (
                        <ul className="personal-list">
                            <li onClick={() => navigate("/personal/animation")}>Animation Quiz</li>
                            <li onClick={() => navigate("/personal/dashboard")}>Time Dashboard</li>
                            
                            {/* <li>Study Site</li>
                            <li>Blog Web</li>
                            <li>Blog Web</li> */}
                        </ul>
                    )}
                </div>
            </div>
            <div className="box"></div>
        </>
    );
};

export default Projects;
