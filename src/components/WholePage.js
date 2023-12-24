import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
export function WholePage() {
    const productsList = [
        {
            imgAddress: 'https://m.media-amazon.com/images/I/41lois+jAAL._AC_SY200_.jpg',
            description: 'Processor: High performance MediaTek G85',
            name: "Product 1",
            price: "$50.00 - $90.00",
            isCart: true

        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/41Jd30Rs8fL._AC_SR400,600_.jpg',
            description: 'Omega 3 Fish Oil, 90 Capsules | Trustified Certified for Accuracy ',
            name: "Product 2",
            price: "$40.00 - $80.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/41D5RDFWK1L._AC_SR400,600_.jpg',
            description: 'Biozyme Performance Whey Protein | Clinically Tested 50% Higher',
            name: "Product 3",
            price: "$10.00 - $50.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/41LISHgGqOL._AC_SR400,600_.jpg',
            description: 'Koshaveda Ashwagandha 500mg, Ayurveda for Performance,',
            name: "Product 4",
            price: "$80.00 - $180.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/41OsfyOJsOL._AC_SR400,600_.jpg',
            description: 'BCAA product, Powerful Intra Workout with 5 g Vegan BCAAs & 500 mg',
            name: "Product 5",
            price: "$840.00 - $280.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/31-63fohghL._AC_SR400,600_.jpg',
            description: 'The Indus Valley Super Smooth Cast Iron Tawa for Dosa/Chapathi',
            name: "Product 6",
            price: "$840.00 - $280.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/41p5V+I-4FL._AC_SR400,600_.jpg',
            description: 'The Indus Valley Preseasoned Cast Iron Fish Fry Pan with Double Handl',
            name: "Product 7",
            price: "$80.00 - $280.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/21BNVGclytL._AC_SR400,600_.jpg',
            description: 'The Indus Valley Wooden Round Spoon Flip/Spatula/Ladle for',
            name: "Product 8",
            price: "$80.00 - $20.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/41TyGG3DeGL._AC_SR400,600_.jpg',
            description: 'The Indus Valley Super Smooth Cast Iron Tawa for Dosa/Chapathi ',
            name: "Product 9",
            price: "$840.00 - $20.00",
            isCart: true
        },
        {
            imgAddress: 'https://m.media-amazon.com/images/I/31x1NhKRZSL._AC_SR400,600_.jpg',
            description: 'The Indus Valley Cast Iron Appam Pan/Appa',
            name: "Product 10",
            price: "$40.00 - $280.00",
            isCart: true
        }
    ];
    const [addToCart, setAddToCart] = useState([...productsList]);
    const handleToCart = (index) => {
        const updatedCart = [...addToCart];
        updatedCart[index].isCart = !updatedCart[index].isCart;
        setAddToCart(updatedCart);

    }
    const productsInCart = addToCart.filter(product => !product.isCart);
    console.log(productsInCart);
    const countProductsInCart = productsInCart.length;
    console.log(addToCart);
    return (
        <>
            <div>
                <nav style={{ position: "sticky", top: "0" ,zIndex: 1000}} className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                                <li className="nav-item dropdown">
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#!">All Products</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                        <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{countProductsInCart}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                <Header />
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {
                                productsList.map((product, index) => {
                                    return (
                                        <div key={index} className="col mb-5">
                                            <div className="card h-100">
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                                <img className="card-img-top" style={{ width: "100%", height: "300px" }} src={product.imgAddress} alt="..." />
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{product.name}</h5>
                                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                            <div className="bi-star-fill"></div>
                                                        </div>
                                                        <div>
                                                            <p>{product.description}</p>
                                                        </div>
                                                        <span className="text-muted">${product.price}</span>
                                                    </div>
                                                </div>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center"><button onClick={() => { handleToCart(index) }} className="btn btn-outline-dark mt-auto">
                                                        {
                                                            addToCart[index].isCart ? "Add to Cart" : "Remove from Cart"
                                                        }
                                                    </button></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
                <Footer />

            </div>
        </>
    );

}