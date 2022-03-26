import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ShowRandom from '../ShowRandom/ShowRandom';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    const [random, setRandom] = useState([]);
    // const [clearCarts, setClearCarts] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct)
        let newCart = [];
        // newCart = [...carts, selectedProduct];

        const exists = carts.find(product => product.id === selectedProduct.id);
        if (!exists) {
            newCart = [...carts, selectedProduct];
        }
        else {
            const rest = carts.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest, exists];
        }
        console.log(newCart)
        setCart(newCart);

    }
    const randomItemSelect = (carts) => {
        // console.log(carts);
        const emptyArray = [];
        carts.map(cart => emptyArray.push(cart.name))
        // console.log(emptyArray);
        const randomItem = emptyArray[Math.floor(Math.random() * emptyArray.length)];
        // console.log(randomItem);
        setRandom(randomItem);

    }
    const clearCart = () => {
        setCart([]);
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

                <button className='buttonDesign' onClick={() => { randomItemSelect(carts) }}>Choose One For Me</button>
                <br />
                <button className='buttonDesign' onClick={() => { clearCart() }}>Choose Again</button>
                <ShowRandom random={random}></ShowRandom>

            </div>

        </div>
    );
};

export default Shop;