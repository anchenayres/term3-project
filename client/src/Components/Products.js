import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
import SingleProduct from "./SingleProduct"

const Products = () => {


    
  const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5002/api/allProducts/')
        .then(res => {
            let data = res.data[0];
            console.log(data)
            setProducts(data)
      });

    }, []);

    // const [components, setComponents] = useState();

    // useEffect(()=>{
    //     const render = SingleProduct.map((item) => <SingleProduct key={item} productName={item} />);
    //     setComponents(render);
    // },[]);


    return (
    <>

    <div className="nav">
        <div className="logo"></div>
        <div className="home"><a href="/Home">Home</a></div>
        <div className="products"><a href="/Products">Products</a></div>
        <div className="login"><a href="/">Sign In</a></div>
        <div className="cart"><a href="/Cart">Cart</a></div>



    </div>

    {/* <div className="latest1-block">Smart Collar</div>
    <div className="latest2-block">Flat Collar</div> */}
    
    

        <div className="carouselpro">
        
        {/* <div className="carousel-pro"></div> */}
        
        {/* {components} */}


        <SingleProduct
        key={products._id} 
        productName={products.productName} 
        description={products.description} 
        inStock={products.inStock} 
        cost={products.cost}>
        </SingleProduct>

        </div>

        {/* <div className="carouselpro2">
        <div className="carousel-pro2"></div>
        <div className="carousel-pro-info2">
            <h6>Callie Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block2"><a href="/Individual">View</a></button>
        <button className="stock-block2">In Stock: 6</button>
        <button className="price-block2">R875.00</button>
        </div>

        <div className="carouselpro3">
        <div className="carousel-pro3"></div>
        <div className="carousel-pro-info3">
            <h6>Opal Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block3"><a href="/Individual">View</a></button>
        <button className="stock-block3">In Stock: 1</button>
        <button className="price-block3">R699.00</button>
        </div>

        <div className="carouselpro4">
        <div className="carousel-pro4"></div>
        <div className="carousel-pro-info4">
            <h6>Justin Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block4"><a href="/Individual">View</a></button>
        <button className="stock-block4">In Stock: 3</button>
        <button className="price-block4">R599.00</button>
        </div>
        
        <div className="carouselpro5">
        <div className="carousel-pro5"></div>
        <div className="carousel-pro-info5">
            <h6>Lenny Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block5"><a href="/Individual">View</a></button>
        <button className="stock-block5">In Stock: 5</button>
        <button className="price-block5">R850.00</button>
        </div>

        <div className="carouselpro6">
        <div className="carousel-pro6"></div>
        <div className="carousel-pro-info6">
            <h6>Buddy Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block6"><a href="/Individual">View</a></button>
        <button className="stock-block6">In Stock: 6</button>
        <button className="price-block6">R1569.00</button>
        </div>

        <div className="carouselpro7">
        <div className="carousel-pro7"></div>
        <div className="carousel-pro-info7">
            <h6>Johnny Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block7"><a href="/Individual">View</a></button>
        <button className="stock-block7">In Stock: 1</button>
        <button className="price-block7">R456.00</button>
        </div>

        <div className="carouselpro8">
        <div className="carousel-pro8"></div>
        <div className="carousel-pro-info8">
            <h6>Suzy Collar</h6>
            <h5>Not only is this a stylish collar but you can track your dog's exact location with the built in GPS device.</h5></div>
        <button className="view-block8"><a href="/Individual">View</a></button>
        <button className="stock-block8">In Stock: 3</button>
        <button className="price-block8">R350.00</button> */}
        {/* </div> */}



    <div className="footer"></div>


    </>
    )
};

export default Products;