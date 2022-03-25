import React from 'react';
import './Shop.css'
const Shop = (props) => {
    const { name, id, img, price } = props.product;
    return (
        <div className="products">
            <h3>name:{name}</h3>
            <p>id:{id}</p>
            <img src={img} alt="" />
            <h6>price:{price}</h6>
        </div>
    );
};

export default Shop;