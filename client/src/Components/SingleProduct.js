import React from 'react'


const SingleProduct = (props) => {
    
    console.log(props)

    return (
        <div>
        <div className="carousel-pro-info">
            <h6>{props.productName}</h6>
            <h5>{props.description}</h5>
            <button className="view-block"><a href="/Individual">View</a></button>
            <button className="stock-block">In Stock: {props.inStock}</button>
            <button className="price-block">R{props.cost}</button>
        </div>
        </div>
    )
}

export default SingleProduct;