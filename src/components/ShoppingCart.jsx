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
        <div id="shopping-cart" className="bg-white fixed mt-8 w-60 -right-60 top-8 h-screen ease-out duration-500">
            {cart.map((item)=>{
                return (
                    <div key={item.name}>
                        {item.title}
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingCart