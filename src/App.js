import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.js";
import Projects from "./pages/Projects.js";
import Contact from "./pages/Contact.js";
// import Contents from "./pages/Contents.js";
import Layout from "./layout/Layout.js";
import Stay from "./pages/Stay.js";
import Resty from "./pages/Resty.js";
// import Animation from "./pages/Animation.js";
// import TimeDashBoard from "./pages/TimeDashBoard.js";
import "./App.css";
import Personal from "./components/Personal.js";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

                {/* 팀 프로젝트 상세 */}
                <Route path="/stay" element={<Stay />} />
                <Route path="/resty" element={<Resty />} />

                {/* 개인 프로젝트 상세(JSON 렌더) */}
                <Route path="/personal/:type" element={<Personal />} />
            </Route>
        </Routes>
    );
}

export default App;
