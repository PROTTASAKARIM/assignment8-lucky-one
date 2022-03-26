import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props);
    const { name } = props.cart;
    return (
        <div>
            <p>Book Name : {name}</p>
        </div>
    );
};

export default Cart;