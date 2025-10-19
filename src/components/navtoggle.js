import { useState, useEffect } from 'react';
import './style.css';
export default function Navtoggle(){

    const [activeLink, setActiveLink] = useState('top');

    const handleSetActive=(selection)=>{
        setActiveLink(selection);
        const element = document.querySelector(`#${selection}`);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');
        const observeScroll= new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, { threshold: 0.3 }
    );
    sections.forEach((section) => observeScroll.observe(section));

    return () => {
        sections.forEach((section) => observeScroll.unobserve(section));
    };
},[]);

    const menuItems = ["top", "about", "projects", "contact"];

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Portfolio</h1>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" 
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Main Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {menuItems.map((item) => (
                                    <li className="nav-item" key={item}>
                                        <button 
                                            className={`nav-link btn border-0 bg-transprarent position-relative ${activeLink===item? "active-link":""}`}
                                            onClick={() => handleSetActive(item)} data-bs-dismiss='offcanvas'>
                                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse d-none d-lg-flex justify-content-end">
                        <ul className="navbar-nav">
                            {menuItems.map((item) => (
                                <li className="nav-item" key={item}>
                                    <button className={`nav-link btn border-0 bg-transprarent position-relative ${activeLink===item? "active-link":""}`}
                                    onClick={() => handleSetActive(item)}>
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );  
}