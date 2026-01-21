import React from "react";
import "./Skills.scss";

const Skills = () => {
    return (
        <div className="skills-page">
            <div className="skills">SkILLS</div>
            <div className="skills-type">
                <div className="left">
                    <span className="label">2D</span>
                    <div className="items">
                        <span>Photoshop</span>
                        <span>Illustrator</span>
                        <span>Figma</span>
                    </div>
                </div>
                <div className="middle">
                    <span className="label">3D</span>
                    <div className="items">
                        <span>RHINO</span>
                        <span>KeyShot</span>
                        <span>Blender</span>
                        <span>3DS MAX</span>
                        <span>Fusion 360</span>
                        <span>3D Print</span>
                    </div>
                </div>
                <div className="right">
                    <span className="label">WEB</span>
                    <div className="items">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>HTML/CSS</span>
                        <span>SQL</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
