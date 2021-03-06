import { prettyDOM } from '@testing-library/dom';
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price,0);
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = Math.round(total/10);

    return (
        <div>
            <h2>Order Summary</h2>n i843uju74
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price: {total + shipping + tax}</p>
        </div>
    );
};

export default Cart;