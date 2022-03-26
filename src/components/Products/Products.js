import React from 'react';

import './Products.css'
const Products = (props) => {
    const { name, id, img, price } = props.product;
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
                <button className='cart-btn'>Add to Cart
                    <div className='icon'>
                        <p>
                            i
                        </p>
                    </div>
                </button>
            </div>
        </div>


    );
};

export default Products;