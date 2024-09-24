import React from 'react';
import './App.css'; // Custom CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#"></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "100px" }}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 700 }}>
              PIZZA HOUSE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Connect</a>
          </li>
        </ul>
        <form className="d-flex" role="search" style={{ marginRight: "200px" }}>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-search" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="pizza1.jpg" className="d-block w-100" alt="Neapolitan Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza2.jpg" className="d-block w-100" alt="Margherita Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Margherita Pizza</h5>
            <p>A delicious pizza topped with fresh tomatoes and mozzarella cheese.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza3.jpg" className="d-block w-100" alt="Margherita Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Italian Pizza</h5>
            <p>The masterpiece brings beauty in both taste and scent from Italy.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza4.jpg" className="d-block w-100" alt="Margherita Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Bell Pepper Pizza</h5>
            <p>A fragrant pizza with the smell of bell peppers.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza5.jpg" className="d-block w-100" alt="Margherita Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Olivia Pizza</h5>
            <p>The sweet aroma of melted mozzarella cheese.</p>
          </div>
        </div>
        {/* Add more carousel items as necessary */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// Sample pizza data for the menu
const pizzas = [
  {
    name: "Margherita Pizza",
    img: "pizza2.jpg",
    price: "$40.00",
    sale: true,
    new: false,
    discountedPrice: "$24.00"
  },
  {
    name: "Mushroom Pizza",
    img: "menu2.jpg",
    price: "$25.00",
    sale: false,
    new: false,
  },
  {
    name: "Hawaiian Pizza",
    img: "menu3.jpg",
    price: "$30.00",
    sale: false,
    new: true,
  },
  {
    name: "Pesto Pizza",
    img: "menu4.jpg",
    price: "$50.00",
    sale: true,
    new: false,
    discountedPrice: "$30.00"
  }
  // Add more pizza objects as necessary
];

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {pizzas.map((pizza, index) => (
          <div className="card" key={index}>
            <img src={pizza.img} alt={pizza.name} className="card-img" />
            <div className="card-body">
              <h5>{pizza.name}</h5>
              <p>
                {pizza.sale && <span className="badge sale">SALE</span>}
                {pizza.new && <span className="badge new">NEW</span>}
                <br />
                {pizza.discountedPrice ? (
                  <>
                    <span className="text-muted"><del>{pizza.price}</del></span>
                    <strong className="discounted-price"> {pizza.discountedPrice}</strong>
                  </>
                ) : (
                  <strong>{pizza.price}</strong>
                )}
              </p>
              <button className="btn">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TableBooking() {
  return (
    <section className="table-booking">
      <h2>Book Your Table</h2>
      <form className="booking-form">
        <input type="text" placeholder="Your Name *" required />
        <input type="email" placeholder="Your Email *" required />
        <select required>
          <option value="">Select a Service</option>
          <option>Dining</option>
          <option>Takeaway</option>
        </select>
        <textarea placeholder="Please write your comment"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Menu />
      <TableBooking />
    </div>
  );
}

export default App;
