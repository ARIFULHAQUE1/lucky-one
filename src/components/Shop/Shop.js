import React from 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Products from '../Products/Products';



const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop'>

            <div className='products'>
                {
                    products.map(product => <Products product={product} key={product.id}></Products>)
                }

            </div>
            <div className='summary'>
                <h3>hello</h3>

            </div>
        </div>

    );
};

export default Shop;