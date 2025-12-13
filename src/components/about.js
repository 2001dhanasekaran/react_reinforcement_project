import htmlLogo from '../imgs/html_logo.png';
import cssLogo from '../imgs/css_logo.webp';
import bootstrapLogo from '../imgs/bootstrap_logo.png';
import jsLogo from '../imgs/javascript_logo.webp';
import reactLogo from '../imgs/react_logo.webp';
import expressLogo from '../imgs/express-js.png';
import mongoDBLogo from '../imgs/mongodb-icon.png';
import nodeLogo from '../imgs/nodejs.svg';

export default function About(){
    const skills=[
        { src: htmlLogo, alt: 'HTML logo' },
        { src: cssLogo, alt: 'CSS logo' },
        { src: bootstrapLogo, alt: 'Bootstrap logo' },
        { src: jsLogo, alt: 'JavaScript logo' },
        { src: reactLogo, alt: 'React logo' },
        { src: nodeLogo, alt: 'Node Logo'},
        { src: expressLogo, alt:'Express Logo'},
        { src: mongoDBLogo, alt: 'MongoDB Logo'},

    ];
    return(
        <div className="container mt-5 pt-5 border">
            <h1 data-aos="slide-up">About</h1>
            <p data-aos="slide-up">
            I am a proficient MERN Stack Developer with expertise in building responsive, high-performance web applications. 
            With a strong command of HTML, CSS, Bootstrap, JavaScript, React.js, Express.js, and MongoDB, I transform complex 
            designs into seamless, interactive user experiences. My focus is on writing clean, maintainable code while ensuring 
            optimal performance, scalability, and cross-browser compatibility. Passionate about problem-solving and continuous 
            learning, I stay updated with emerging technologies to create innovative and efficient solutions. Let’s collaborate 
            to turn your vision into reality!
            </p>
            <h1 className="text-center my-5" data-aos="fade-up">My Skills</h1>
            <div className="row" data-aos="fade-down">
                {skills.map((skill, index)=>(
                    <div className="col-6 col-md-4 col-lg-2 mb-4 mx-auto d-block" key={index}>
                        <div>
                            <img src={skill.src} alt={skill.alt} className='img-fluid' style={{maxHeight:'150px', objectFit: 'contain'}} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}