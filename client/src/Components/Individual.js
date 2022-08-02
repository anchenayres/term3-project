import React from "react";


const Individual = () => {

    document.querySelectorAll(".carousel").forEach((carousel) => {
        const items = carousel.querySelectorAll(".carousel__item");
        const buttonsHtml = Array.from(items, () => {
          return `<span class="carousel__button"></span>`;
        });
      
        carousel.insertAdjacentHTML(
          "beforeend",
          `
              <div class="carousel__nav">
                  ${buttonsHtml.join("")}
              </div>
          `
        );
      
        const buttons = carousel.querySelectorAll(".carousel__button");
      
        buttons.forEach((button, i) => {
          button.addEventListener("click", () => {
            // un-select all the items
            items.forEach((item) =>
              item.classList.remove("carousel__item--selected")
            );
            buttons.forEach((button) =>
              button.classList.remove("carousel__button--selected")
            );
      
            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
          });
        });
      
        // Select the first item on page load
        items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected");
      });
      
    return (
    <>

    <div className="nav">
        <div className="logo"></div>
        <div className="home"><a href="/Home">Home</a></div>
        <div className="products"><a href="/Products">Products</a></div>
        <div className="login"><a href="/">Sign In</a></div>
        <div className="cart"><a href="/Cart">Cart</a></div>
    </div>

    <div className="welcome-image"></div>

    <div className="img1"></div>
    <div className="img2"></div>
    <div className="img3"></div>
    
    <div className="product-des"></div>
    <div className="size-chart"></div>

    <div className="carousel">
        <div className="carousel__item">Content 1</div>
        <div className="carousel__item carousel__item--selected">Content 2</div>
        <div className="carousel__item">Content 3</div>
        <div className="carousel__nav">
            <span className="carousel__button"></span>
            <span className="carousel__button carousel__button--selected"></span>
            <span className="carousel__button"></span>
        </div>
    </div>


    <select className="fabric-drop" name="selecting">
        <option>Select a Fabric</option>
        <option>Cotton</option>
        <option>Leather</option>
        <option>Nylon</option>
        <option>Metal</option>
    </select>

    <select className="colour-drop" name="selecting">
        <option>Select a Colour</option>
        <option>Brown</option>
        <option>Black</option>
        <option>Blue</option>
        <option>Pink</option>
    </select>

    <select className="size-drop" name="selecting">
        <option>Select a Size</option>
        <option>XS</option>
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
    </select>

    <select className="quantity-drop" name="selecting">
        <option>Select a Quantity</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>


    <div className="footer"></div>

    </>
    )
};

export default Individual;