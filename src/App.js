import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import Stay from "./pages/Stay";
import Resty from "./pages/Resty";
import Personal from "./components/Personal";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stay" element={<Stay />} />
                <Route path="/resty" element={<Resty />} />
                <Route path="/personal/:type" element={<Personal />} />
            </Route>
        </Routes>
    );
}

export default App;
