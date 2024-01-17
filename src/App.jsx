import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ShoppingCart from "./components/ShoppingCart"
import { Outlet } from 'react-router-dom'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [inventory, setInventory] = useState([])

  const getInventory = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=10")
    const data = await response.json()
    setInventory(data)
  }

  useEffect(()=>{
    getInventory()
  },[])
  
  const handleShowCart = () => {
    setShowCart(showCart => !showCart)
  }

  return (
    <>
      <NavBar handleShowCart={handleShowCart} />
      <Outlet context={{ inventory }} />
      {showCart && <ShoppingCart />}
    </>
    
  )
  
}

export default App
