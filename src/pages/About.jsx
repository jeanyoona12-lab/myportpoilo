import React from "react";
import "./About.scss";

const About = () => {
    return (
        <>
            <div className="text-area">
                <div className="text-left">
                    <div className="about">ABOUT</div>
                    <div className="me">ME</div>
                </div>
                <div className="text-right">
                    <p>
                        사용자의 맥락과 행동을 고려해<br /> 문제를 해결하는 
                        <span className="inner"> UX/UI 디자이너 </span>입니다.
                    </p>
                    <p>
                        복잡한 플로우와 다중 역할 시스템을 <br />명확한 구조로
                        단순화하는 데 관심이 많습니다.
                    </p>
                    <p>
                        프로젝트 제약과 기술 환경을 고려해 <br />실제 구현 가능한 UX를
                        설계하며,
                    </p>
                    <p>React 기반 흐름과 데이터 구조에 대한 이해를 통해</p>
                    <p>
                        디자이너와 개발 간의 간극을 줄이는 경험을 쌓고 있습니다.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
