import React from 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';



const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='shop'>

            <div className='products'>
                {
                    products.map(product => <Products product={product}
                        addToCart={addToCart}
                        key={product.id}>
                    </Products>)
                }

            </div>
            <div className='Cart-history'>
                <Cart cart={cart} ></Cart>
            </div>
        </div>

    );
};

export default Shop;