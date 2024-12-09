import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './components/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navtoggle from './components/navtoggle';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: false
    });
  },[]);

  return(
    <BrowserRouter>
        <Navtoggle />
        <Routes>
            <Route path='/'element={<Home />} />
            <Route path='about'element={<About />} />
            <Route path='projects'element={<Projects />} />
            <Route path='contact'element={<Contact />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
