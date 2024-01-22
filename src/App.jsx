import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ShoppingCart from "./components/ShoppingCart"
import { Outlet } from 'react-router-dom'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [inventory, setInventory] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [cart, setCart] = useState([])

  const handleItemClick = (item) => {
    let newCart = [...cart]
    newCart.push(item)
    setCart(newCart)
  }

  const getInventory = async (limits="") => {
    const response = await fetch("https://fakestoreapi.com/products?" + limits)
    const data = await response.json()
    setInventory(data)
    setIsLoading(false)
  }

  useEffect(()=>{
    getInventory("limit=5")
  },[])
  
  const handleShowCart = () => {
    setShowCart(showCart => !showCart)
  }

  return (
    <>
      <NavBar handleShowCart={handleShowCart} />
      <Outlet context={{ inventory, isLoading, getInventory, handleItemClick }} />
      {true && <ShoppingCart cart={cart} showCart={showCart} />}
    </>
    
  )
  
}

export default App
