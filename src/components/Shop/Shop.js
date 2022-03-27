import React from 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    let [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    const ChoseAProduct = () => {

        const ChoseOne = cart[Math.floor(Math.random() * cart.length)];
        const item = [ChoseOne]
        setCart(item)
    }
    const ChoseAgain = () => {
        setCart([])
        console.log('clicked')
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

                <Cart cart={cart}
                    key={cart.id}
                    ChoseAProduct={ChoseAProduct}
                    ChoseAgain={ChoseAgain}></Cart>

            </div>
            <div className='QueAns'>
                <span>How react Works?</span>
                <li>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM</li>
                <span>How State Works?</span>
                <li>State allow to  change data in an application. It's define  an object where we define key-value pairs specifying various data we want to track in  application.</li>
            </div>
        </div>

    );
};

export default Shop;