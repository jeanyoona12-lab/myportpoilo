import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => (
    <div className="layout">
        <Nav />
        <main>
            <Outlet />
        </main>
    </div>
);

export default Layout;
