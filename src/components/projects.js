import shopping_cart from '../imgs/shopping_cart.png';
import registration_page from '../imgs/registration_page.png';
import weather_app from '../imgs/weather_app.png';
import eComLogin from '../imgs/login_page.png';
import eComRegister from '../imgs/registration_page1.png';
import ecomAdmin from '../imgs/admin_page.png';
import adminAddProduct from '../imgs/add_products.png';
import adminEditProduct from '../imgs/edit_products.png';
import ecomHome from '../imgs/home_page.png';
import categories from '../imgs/categories.png';
import productDisplay from '../imgs/displaying_products.png';
import wishlist from '../imgs/wishlist_page.png';
import cart from '../imgs/cart_page.png';
import contact from '../imgs/contact_page.png';
import about from '../imgs/about_page.png';

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
                    <a className='btn btn-primary' href="https://tangerine-klepon-e91c3a.netlify.app/" target="_blank" rel="noopener noreferrer">Go to App</a>
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
                    <a className='btn btn-primary' href="https://beautiful-gumption-192d54.netlify.app/" target="_blank" rel="noopener noreferrer">Go to App</a>                    </div>
            </div>
            <div className="card mb-5" data-aos="fade-up">
                <img src={weather_app} className="card-img-top img-fluid" alt="weather_app" style={{objectFit:'cover', height: '400px'}} />
                <div className="card-body">
                    <h5 className="card-title">Weather App</h5>
                    <p className="card-text">Built a responsive Weather App using HTML, CSS, JavaScript, and OpenWeatherMap 
                        API with geolocation support and dynamic city-based weather reports.
                    </p>
                    <a className='btn btn-primary' href="https://quiet-maamoul-140ac3.netlify.app/" target="_blank" rel="noopener noreferrer">Go to App</a>
                </div>
            </div>
            <div className="card mb-5" data-aos="fade-up">
                <div className="card-body carousel slide" id='stationary'>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="9" aria-label="Slide 10"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="10" aria-label="Slide 11"></button>
                        <button type="button" data-bs-target="#stationary" data-bs-slide-to="11" aria-label="Slide 12"></button>
                    </div>
                    <div className='carousel-inner'>
                        <div className="carousel-item active">
                            <img src={eComLogin} className="d-block w-100 img-fluid" alt="eComLogin" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption blur_caption">
                                <h5>Login Page</h5>
                                <p>User login interface with authentication features.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={eComRegister} className="d-block w-100 img-fluid" alt="eComRegister" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption blur_caption">
                                <h5>Registration Page</h5>
                                <p>User registration interface with form validation.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ecomAdmin} className="d-block w-100 img-fluid" alt="ecomAdmin" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption">
                                <h5>Admin Dashboard</h5>
                                <p>Admin interface for managing products.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={adminAddProduct} className="d-block w-100 img-fluid" alt="adminAddProduct" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption">
                                <h5>Add Product Dialog box</h5>
                                <p>Admin interface for adding new products.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={adminEditProduct} className="d-block w-100 img-fluid" alt="adminEditProduct" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption">
                                <h5>Edit Product Dialog box</h5>
                                <p>Admin interface for editing existing products.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ecomHome} className="d-block w-100 img-fluid" alt="ecomHome" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption blur_caption">
                                <h5>Home Page</h5>
                                <p>User-friendly interface</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={categories} className="d-block w-100 img-fluid" alt="categories" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption blur_caption">
                                <h5>Categories Page</h5>
                                <p>User-friendly interface for browsing products based on categories.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={productDisplay} className="d-block w-100 img-fluid" alt="productDisplay" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption">
                                <h5>Product Display Page</h5>
                                <p>User-friendly interface for viewing product details.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={wishlist} className="d-block w-100 img-fluid" alt="wishlist" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption">
                                <h5>Wishlist Page</h5>
                                <p>User-friendly interface for managing product wishlists.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={cart} className="d-block w-100 img-fluid" alt="cart" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption">
                                <h5>Cart Page</h5>
                                <p>User-friendly interface for managing shopping cart items.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={about} className="d-block w-100 img-fluid" alt="about" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption">
                                <h5>About Page</h5>
                                <p>User-friendly interface for viewing information about the company.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={contact} className="d-block w-100 img-fluid" alt="contact" style={{objectFit:'contain', height: '400px'}} />
                            <div className="carousel-caption text-dark blur_caption ">
                                <h5>Contact Page</h5>
                                <p>User-friendly interface for contacting support.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#stationary" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#stationary" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Stationary E-Commerce Website</h5>
                    <p className="card-text">Developed a MERN stack e-commerce website with features for adding products to 
                        the Cart and Wishlist, enhancing user experience. Implemented an admin panel for efficient product 
                        management. Designed an interactive and responsive UI for seamless shopping.
                    </p>
                    <a className='btn btn-primary' href="https://github.com/2001dhanasekaran/mern-project" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
}