import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
    return (
        <div className="container mt-5 py-5">
            <h1 data-aos="fade-up">Contact Details</h1>
            <a href='tel:+919597685056' className='btn btn-outline-success ms-3 pb-3' data-aos="fade-up">
                <span className='me-3 fs-3'><FaWhatsapp /></span>+91 95976 85056
            </a>
            <a href='mailto:2001.dhanasekaran@gmail.com' className='btn btn-outline-primary ms-3 pb-3' data-aos="fade-down">
                <span className='me-3 fs-3'><MdEmail/></span>2001.dhanasekaran@gmail.com
            </a>
            <p className='mt-4'>Feel free to drop me a message—I'm always excited to connect and collaborate! 
                Whether it’s for work or just to connect, my inbox is always open for you!
            </p>
        </div>
    );
}
