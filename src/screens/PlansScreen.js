import React, { useState } from 'react'
import './PlansScreen.css'

const initialList = [
    {
        productName: "Premium",
        productDescription: "4K + HDR",
        productPrice: "10$",
        status: false
    },
    {
        productName: "Basic",
        productDescription: "720p",
        productPrice: "8$",
        status: false
    },
    {
        productName: "Standard",
        productDescription: "1080p",
        productPrice: "9$",
        status: false
    }
];

function PlansScreen() {
    const [products, setProducts] = useState(initialList);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const handleClick = (productName) => {
        const newList = products.map((product) => {
            if (product.productName === productName) {
                const updatedProduct = {
                    ...product,
                    status: !product.status,
                };
                return updatedProduct;
            }
            return product;
        });

        setProducts(newList);
    }
  return (
    <div className='plansScreen'>
        <p>Renewal date: {date}</p>
        {products.map((product) => (
            <div key={product.productName} 
                className={`${product.status && "plansScreen__plan--disabled"} plansScreen__plan`}>
                <div className='plansScreen__info'>
                    <h5>{product.productName}</h5>
                    <h6>{product.productDescription}</h6>
                </div>

                <button onClick={() => handleClick(product.productName)}>
                    {product.status ? 
                    "Current Package" : "Subscribe"}
                </button>
            </div>
        ))}
        
    </div>
  )
}

export default PlansScreen
