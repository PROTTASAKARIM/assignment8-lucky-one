import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct)
        let newCart = [];
        newCart = [...carts, selectedProduct];
        console.log(newCart)
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Books</h2>
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
                <button>Choose One For Me</button>
                <br />
                <button>Choose Again</button>
            </div>

        </div>
    );
};

export default Shop;