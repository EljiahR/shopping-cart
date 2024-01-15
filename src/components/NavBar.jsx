const NavBar = () => {
    const navbarDivs = "h-full hover:bg-gray-50 active:bg-gray-200 duration-150 hover:ease-in-out flex justify-center items-center"

    return (
        <nav className="grid grid-cols-3 items-center fixed top-0 left-0 right-0 justify-around h-14 shadow-md bg-white" id="navbar">
            <div className={navbarDivs}>
                <h2 >Home</h2>
            </div>
            <div className={navbarDivs}>
                <h2>Shop</h2>
            </div>
            <div className={navbarDivs}>
                <h2>Cart</h2>
            </div>
            
            
            
        </nav>
    )
}

export default NavBar