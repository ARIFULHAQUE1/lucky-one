import React from 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop'>

            {
                products.map(product => <Products product={product} key={product.id}></Products>)
            }
            <div className='order'>
                <h3>Selected item</h3>
                <Product></Product>
            </div>
        </div>

    );
};

export default Shop;