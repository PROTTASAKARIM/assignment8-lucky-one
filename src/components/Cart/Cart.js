import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    return (
        <div>
            <p>Book Name : {props.cart.name}</p>
        </div>
    );
};

export default Cart;