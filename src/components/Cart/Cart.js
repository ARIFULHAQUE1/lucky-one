import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const cart = props.cart;
    let total = 0;
    let name = [];
    let image = [];
    for (const product of cart) {
        total = total + product.price
        name = product.name
        image = product.img
    }
    return (

        <div className='cart-item'>
            <h4>Selected Items</h4>
            <div className='cart'>
                <h3>name:{name}</h3>
                <div className='cart-image'>
                    <img src={image} alt="" />
                </div>
            </div>
            <button className='chose-button'>
                Chose for Me
            </button>
        </div>
    );
};

export default Cart;