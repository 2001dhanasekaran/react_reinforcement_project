import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
    return (
        <div className="container mt-5 py-5">
            <h1 data-aos="fade-up">Contact Details</h1>
            <p data-aos="fade-up"><span className='text-success me-3 fs-3'><FaWhatsapp /></span>+91 XXXXX YYYYY</p>
            <p data-aos="fade-down"><span className='text-primary me-3 fs-3'><MdEmail/></span>XYZ@gmail.com</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat autem minus. Dicta doloribus obcaecati veniam soluta ea iure officiis similique, adipisci nobis quam autem, eaque quae sit fugiat suscipit.</p>
        </div>
    );
}
