import React from "react";
import Nav from "../components/Nav";
import "./Home.scss";
import ShinyGroup from "../components/ShinyGroup";

const Home = () => {
    return (
        <div className="home">
            <Nav />

            <ShinyGroup
                speed={2.7}
                spread={120}
                direction="left"
                shineColor="#3a3a3a"
                pauseOnHover={false}
                disabled={false}
                className="content"
            >
                <p className="flow">FLOW</p>
                <p className="design">DESIGN</p>
            </ShinyGroup>

            <p className="in">in</p>
        </div>
    );
};

export default Home;
