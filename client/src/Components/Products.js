import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
import SingleProduct from "./SingleProduct"


const Products = () => {

    // const [productName, setProductName] = useState();
    // const [productPrice, setProductPrice] = useState();
    // const [productDes, setProductDes] = useState();
    // const [productStock, setProductStock] = useState();
  
    // const getName = (e) => {
    //   let value = e.target.value;
    //   setProductName(value);
    // }
    // const getPrice = (e) => {
    //   let value = e.target.value;
    //   setProductPrice(value);
    // }
    // const getDes = (e) => {
    //   let value = e.target.value;
    //   setProductDes(value);
    // }
    // const getStock = (e) => {
    //   let value = e.target.value;
    //   setProductStock(value);
    // }
  
    
    
  const [products, setProducts] = useState([]);

//   const getName = (e) => {
//     let value = e.target.value;
//     setProductName(value);
//   }

//  const addProduct = (e) => {
//     const newProduct = new productSchema ({
//         name: productName,
//         price: productPrice,
//         availStock: {
//             size: req.body.availStock.size,
//             qty: req.body.availStock.qty,
//             material: req.body.availStock.material,
//             colour: req.body.availStock.colour
//         },
//         cost: productPrice,
//         description: productDes

//     })


    useEffect(() => {
        axios.get('http://localhost:5002/api/allProducts')
        .then(res => {
            let data = res.data;
            console.log(data)
            setProducts(data)
      });

    }, []);

    const [components, setComponents] = useState();

    useEffect(()=>{
        const render = products.map((item) =>
        

        <SingleProduct
        key={item._id} 
        productName={item.productName} 
        description={item.description} 
        inStock={item.inStock} 
        cost={item.cost}>
        </SingleProduct>
        
        
        );
        setComponents(render);
    },[products]);


    return (
    <>

    <div className="nav">
        <div className="logo"></div>
        <div className="home"><a href="/Home">Home</a></div>
        <div className="products"><a href="/Products">Products</a></div>
        <div className="login"><a href="/">Sign In</a></div>
        <div className="cart"><a href="/Cart">Cart</a></div>
    </div>

        <form>
            <label>
                <input type="text" id="productName" label="Enter Name" placeholder="Enter your Name" />
            </label>
            <label>
            <input type="text" id="cost" label="Product Price" placeholder="Product Price" />
            </label>
            <label>
            <input type="text" id="description" label="Product Description" placeholder="Product Description" />
            </label>
            <label>
            <input type="text" id="inStock" label="Stock" placeholder="In Stock" />
            </label>
        </form>
        
        <button className="button">Update</button>
    

        <div className="carouselpro">
            {components}
        </div>




    <div className="footer"></div>


    </>
    )
};

export default Products;