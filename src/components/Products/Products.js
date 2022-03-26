import React from 'react';
import './Products.css'
const Products = (props) => {
    const { name, id, img, price } = props.product;
    return (
        <div className="products">

            <div className='product'>
                <img src={img} alt="" />
            </div>
            <div>
                <p>name:{name}</p>
                <p>id:{id}</p>
                <p>price:${price}</p>
            </div>



        </div>
    );
};

export default Products;