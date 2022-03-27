import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { ChoseAProduct } = props;
    const { ChoseAgain } = props;
    console.log(props)
    const cart = props.cart
    if (cart.length > 3) {
        alert('you can select Only three product')

    }
    return (

        <div className='cart-item'>
            <h4>Selected Items</h4>
            <div className="chose-buttons">
                <button onClick={ChoseAProduct} className='chose-button'> Chose for Me </button>
                <div>
                    <button onClick={ChoseAgain} className='chose-again'> Chose Again</button>
                </div>
                <div className='cart'>

                    {
                        cart.map(cart => <div className='cart-image'>
                            <img src={cart.img} alt="" />
                            <h3>name:{cart.name}</h3>
                        </div>)
                    }
                </div>


            </div>
        </div >
    );
};

export default Cart;