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
                    <span className="resty" onClick={() => navigate("/resty")}>
                        RESTY <GoChevronRight />
                    </span>
                    <div
                        className="personal"
                        onClick={() => setOpenPersonal((p) => !p)}
                    >
                        Personal Project{" "}
                        {openPersonal ? <GoChevronDown /> : <GoChevronRight />}
                    </div>
                    <div>
                        <a
                        href="https://www.notion.so/2D-3D-26a37335804f8022abfffcdcc03c7748"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="resty"
                    >
                        ImageViewer (노션)⏵
                    </a>
                    </div>

                    {openPersonal && (
                        <ul className="personal-list">
                            <li onClick={() => navigate("/personal/animation")}>
                                Animation Quiz
                            </li>
                            <li onClick={() => navigate("/personal/dashboard")}>
                                Time Dashboard
                            </li>

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
