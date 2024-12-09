import shopping_cart from '../imgs/shopping_cart.png';
import registration_page from '../imgs/registration_page.png';
import sample_ui from '../imgs/sample_ui.png';

export default function Projects(){
    return(
        <div className="container mt-5 pt-5">
            <h1 className='mb-4'data-aos="fade-up">Projects</h1>
            <div className="card mb-5" data-aos="fade-up">
                <img src={shopping_cart} className="card-img-top img-fluid" alt="shopping_cart" style={{objectFit:'cover', height: '400px'}} />
                <div className="card-body">
                    <h5 className="card-title">Shopping Cart</h5>
                    <p className="card-text"> 
                        This application displays a list of products for users to browse and add to their cart. 
                        It also shows the cart details and allows users to manage their cart.
                    </p>
                    <a className='btn btn-primary' href="https://tangerine-klepon-e91c3a.netlify.app/" target="block" >Go to App</a>
                </div>
            </div>
            <div className="card mb-5" data-aos="fade-up">
                <img src={registration_page} className="card-img-top img-fluid" alt="registration_page" style={{objectFit:'cover', height: '400px'}} />
                <div className="card-body">
                    <h5 className="card-title">Registration and login Authentication </h5>
                    <p className="card-text">
                        A webpage with a registration and login Authentication system. On the registration page, users can 
                        register by entering an email ID and password, which will be saved to the local database 
                        (localStorage). Upon successful registration, the page navigates to the login page. On the login 
                        page, users can enter their credentials, and if the credentials match the stored values in the 
                        local database, they are redirected to a dashboard page.                
                    </p>
                    <a className='btn btn-primary' href="https://beautiful-gumption-192d54.netlify.app/" target="block" >Go to App</a>                    </div>
            </div>
            <div className="card mb-5" data-aos="fade-up">
                <img src={sample_ui} className="card-img-top img-fluid" alt="sample_ui" style={{objectFit:'cover', height: '400px'}} />
                <div className="card-body">
                    <h5 className="card-title"> Dashboard page UI</h5>
                    <p className="card-text">Developed a responsive Dashboard page UI using React and Bootstrap.</p>
                    <a className='btn btn-primary' href="https://amazing-fenglisu-f3f64e.netlify.app/" target="block" >Go to App</a>
                </div>
            </div>
        </div>
    );
}