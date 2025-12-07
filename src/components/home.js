import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

export default function Home(){
    return(
        <div className="container mt-5 pt-5">
            <div id="top" className='main-section'>
                <h2 data-aos="fade-down">Hi, I am</h2>
                <h1 data-aos="fade-down" style={{color:'rgb(122, 64, 177)'}}>Dhanasekaran</h1>
                <h2 data-aos="fade-down">Expert MERN Stack Developer</h2>
                <h4 data-aos="fade-down">Building functional and visually stunning web experiences.</h4>
                <a data-aos="fade-up" className="btn btn-outline-primary mt-3" href="#contact" >Contact Me</a> 
            </div>
            <div id="about" className='main-section'>
               <About />
            </div>
            <div id="projects" className='main-section'>
               <Projects />
            </div>
            <div id="contact" className='main-section'>
               <Contact />
            </div>
        </div>
    );
}