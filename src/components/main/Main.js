import React from "react";
import Intro from "./sections/Intro";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


class Main extends React.Component {
    render() {
        return(
    <div className="w3-padding-large" id="main">
        <div className="w3-content w3-justify w3-text-grey w3-padding-64">
            <Intro />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    </div>
        );
    }
}

export default Main;