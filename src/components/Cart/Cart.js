import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const cart = props.cart

    // let name = [];
    // let image = [];
    // for (const product of cart) {

    //     name = product.name
    //     image = product.img
    // }
    return (

        <div className='cart-item'>
            <h4>Selected Items</h4>

            <div className='cart'>
                {
                    cart.map(cart => <div className='cart-image'>
                        <img src={cart.img} alt="" />
                        <h3>name:{cart.name}</h3>
                    </div>)
                }
            </div>
            <button className='chose-button'>
                Chose for Me
            </button>
        </div>
    );
};

export default Cart;