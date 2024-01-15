import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ShoppingCart from "./components/ShoppingCart"
import { Outlet } from 'react-router-dom'

function App() {
  const [showCart, setShowCart] = useState(false)
  
  const handleShowCart = () => {
    setShowCart(showCart => !showCart)
  }

  return (
    <>
      <NavBar handleShowCart={handleShowCart} />
      <Outlet />
      {showCart && <ShoppingCart />}
    </>
    
  )
  
}

export default App
