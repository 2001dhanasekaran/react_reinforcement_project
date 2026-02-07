import {useState, useEffect} from 'react';
export default function ThemeController(){
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(()=>{
        document.documentElement.setAttribute('data-bs-theme',theme);
        localStorage.setItem('theme',theme);
    },[theme]);

    const toggleTheme=()=>{
        setTheme((prevTheme)=> (prevTheme==='light' ? 'dark' : 'light'));
    };

    return(
        <div className='d-flex align-items-center' title='Click to switch theme'>
            <i className="bi bi-sun-fill"></i>
            <div className='form-check form-switch ms-2'>
                <input className='form-check-input' type='checkbox' role='switch' id='themeSwitch'
                checked={theme ==='dark'} onChange={toggleTheme} aria-label="Toggle theme"
            />
            </div>
            <i className='bi bi-moon-fill'></i>
        </div>
    );
}