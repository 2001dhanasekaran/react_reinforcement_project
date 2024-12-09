import htmlLogo from '../imgs/html_logo.jpg';
import cssLogo from '../imgs/css_logo.webp';
import bootstrapLogo from '../imgs/bootstrap_logo.png';
import jsLogo from '../imgs/javascript_logo.webp';
import reactLogo from '../imgs/react_logo.webp';

export default function About(){
    const skills=[
        { src: htmlLogo, alt: 'HTML logo' },
        { src: cssLogo, alt: 'CSS logo' },
        { src: bootstrapLogo, alt: 'Bootstrap logo' },
        { src: jsLogo, alt: 'JavaScript logo' },
        { src: reactLogo, alt: 'React logo' },

    ];
    return(
        <div className="container mt-5 pt-5 border">
            <h1 data-aos="slide-up">About</h1>
            <p data-aos="slide-up">
                I Am A Skilled Frontend Developer With Expertise In Creating Responsive, High-Performance Web Applications. 
                With A Deep Understanding Of HTML, CSS, Bootstrap, JavaScript, And Frameworks Like React, I Turn Complex Designs Into 
                Seamless, Interactive User Interfaces. My Focus Is On Delivering Clean, Maintainable Code While Ensuring Optimal User 
                Experience And Cross-Browser Compatibility. I Thrive On Solving Problems And Continuously Learning New 
                Technologies To Build Innovative, Efficient Solutions. Let's Collaborate To Bring Your Ideas To Life!
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