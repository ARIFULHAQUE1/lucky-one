import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    const { name, id, img, price } = props.product;
    const addToCart = props.addToCart
    return (
        <div className='product-card'>
            <div className="product">
                <img src={img} alt="" />
            </div>
            <div >
                <div className='cart-text'>
                    <p><span>name:{name}</span></p>
                    <p><span>price:${price}</span></p>
                    <p><small>id:{id}</small></p>
                </div>
                <button onClick={() => addToCart(props.product)} className='cart-btn'>Add to Cart
                    <div className='icon'>
                        <p>
                            <FontAwesomeIcon FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                        </p>
                    </div>
                </button>
            </div>
        </div>


    );
};

export default Products;