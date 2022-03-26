import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const cart = props.cart
    if (cart.length > 3) {
       alert('you can select Only three product')

    }
    const [newcart,setCart]=useState([]);
    const ChoseAProduct=( )=>{
     
        const ChoseOne=Math.floor(Math.random()*newcart.length)
        const item = [ChoseOne]
    setCart(item)
    }
    const ChoseAgain=()=>{
    setCart=([])
    }
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
            <div className="chose-buttons">
                <button onClick={ChoseAProduct} className='chose-button'> Chose for Me </button>
                <div>
                    <button onClick={ChoseAgain} className='chose-again'> Chose Again</button>
                </div>

            </div>
        </div >
    );
}; 

export default Cart;