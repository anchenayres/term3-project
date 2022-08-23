import React from "react";



const Home = () => {

    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]")
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
    
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
      })
    })


    return (
    <>

    <div className="nav">
        <div className="logo"></div>
        <div className="home"><a href="/Home">Home</a></div>
        <div className="products"><a href="/Products">Products</a></div>
        <div className="login"><a href="/">Sign In</a></div>
        <div className="cart"><a href="/Cart">Cart</a></div>
    </div>

    {/* <div className="welcome-image">
        <div class="slide1"></div>
        <div class="slide2"></div>
        <div class="slide3"></div>
    </div> */}
 <section aria-label="Newest Photos">
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
      <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
      <ul data-slides>
        <li className="slide" data-active>
          <img src="https://source.unsplash.com/78A265wPiO4" alt="Nature Image #1">
        </img></li>
        <li className="slide">
          <img src="https://source.unsplash.com/eOpewngf68w" alt="Nature Image #2">
        </img></li>
        <li className="slide">
          <img src="https://source.unsplash.com/ndN00KmbJ1c" alt="Nature Image #3">
        </img></li>
      </ul>
    </div>
  </section>
    


















    
    <div className="latest-block">Latest Products</div>

    <div className="carousel">
        <div className="carousel-1"></div>
        <div className="carousel-1-info">
            <h6>Smart Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block"><a href="/Individual">View</a></button>
        <button className="stock-block">In Stock: 5</button>
        <button className="price-block">R1069.00</button>

        <div className="carousel-2">Now Only R599.00</div>
        <div className="carousel-2-info">
            <h6>Smart Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block2"><a href="/Individual">View</a></button>
        <button className="stock-block2">In Stock: 5</button>
        <button className="price-block2">R1069.00</button>
    </div>

    <div className="discount-block">Discounted Products</div>


        <div className="footer"></div>

    </>
    )
};

export default Home;