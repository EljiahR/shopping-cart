/* eslint-disable react/prop-types */
import { useEffect } from "react"

// eslint-disable-next-line react/prop-types
const ShoppingCart = ({ showCart, cart }) => {
    
    useEffect(()=>{
        const shoppingCart = document.getElementById("shopping-cart")
        if(showCart){
            shoppingCart.classList.add("-translate-x-60")
        }else {
            shoppingCart.classList.remove("-translate-x-60")
        }
    },[showCart])

    return (
        <div id="shopping-cart" className="bg-white fixed w-60 -right-60 top-0 pt-16 h-screen ease-out duration-500">
            <h2 className="">Your Cart</h2>
            
            {cart.map((item)=>{
                return (
                    <div className="flex" key={item.title}>
                        <img className="w-10 h-10" src={item.image} />
                        <p>{item.title.slice(0,12)}</p>
                        <p>x{item.quantity}</p>
                        <p>${item.price}</p>
                    </div>
                )
            })}
            <div>Total: ${cart.reduce((total, item)=> total + item.price, 0)}</div>
        </div>
    )
}

export default ShoppingCart