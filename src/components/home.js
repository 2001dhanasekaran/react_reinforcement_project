import { Link } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

export default function Home(){
    return(
        <div className="container mt-5 pt-5 border">
            <h2 data-aos="fade-down">Hi, I am</h2>
            <h1 data-aos="fade-down" style={{color:'rgb(122, 64, 177)'}}>Dhanasekaran</h1>
            <h2 data-aos="fade-down">Expert Front-end Developer</h2>
            <h4 data-aos="fade-down">Building functional and visually stunning web experiences.</h4>
            <Link data-aos="fade-up" className="btn btn-outline-primary btm-lg" to="/contact" >Contact Me</Link>
            <About />
            <Projects />
            <Contact />
        </div>
    );
}