import { useState } from "react";

export default function SocialLinks() {
    const [toggleOpen, setToggleOpen]= useState(false);

    const handleToggle=()=>{
        setToggleOpen(prev => !prev);
    }

    return (
        <>
            <button className='nav-link btn border-0 bg-transparent' onClick={handleToggle}>Social Links
                <span className={`bi ${toggleOpen ? "bi-chevron-up" : "bi-chevron-down"} fs-6 ms-2 float-end`}></span>
            </button>
            <div className={`position-absolute border p-3 d-flex flex-column ms-3 mt-2 bg-white rounded social-dropdown-box ${toggleOpen ? "d-block" : "d-none"}`}>
                <a className='social-link text-decoration-none text-dark mb-2' 
                    target="_blank" rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/dhanasekaran-p-1911b3209/'>
                    <span className="me-2 text-primary bg-white m-0 bi bi-linkedin"></span>
                    Linkedin
                </a>
                <a className='social-link text-decoration-none text-dark mb-2' 
                    target="_blank" rel="noopener noreferrer"
                    href='https://github.com/2001dhanasekaran/2001dhanasekaran'>
                    <span className="me-2 bi bi-github"></span>
                    GitHub
                </a>
                <a className='social-link text-decoration-none text-dark' 
                    target="_blank" rel="noopener noreferrer"
                    href='https://github.com/2001dhanasekaran/react_reinforcement_project'>
                    <span className="me-2 text-primary bi bi-code-slash"></span>
                    Code
                </a>
            </div>
        </>
    );
}