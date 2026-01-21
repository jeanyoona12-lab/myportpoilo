import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.scss";

const Nav = () => (
    <div className='home-container'>
        <nav style={{ display:"flex", gap:"12px", overflowX:"auto" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            {/* <NavLink to="/contents">Contents</NavLink> */}
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    </div>
);

export default Nav