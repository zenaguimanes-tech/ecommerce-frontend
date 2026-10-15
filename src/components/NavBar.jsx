import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Navbar() {

    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + '/api/cart')
            .then(res => setCartCount(res.data.length))
            .catch(error => console.error(error))
    }, [])

    return (
        <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-2 md:p-4 gap-1 md:gap-2">
                <NavLink to="/" className="flex items-center gap-2 font-bold hover:text-yellow-400 transition h-8 md:h-12 text-lg md:text-2xl">
                    <img src="/logo_e-commerce.png" alt="Logo" className=' items-center flex h-8 md:h-12' /> E-commerce
                </NavLink>
                <NavLink to="/cart" className="text-lg md:text-2xl font-bold hover:text-yellow-400 transition">
                    🛒 Cart
                    {cartCount > 0 && (
                        <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-1">
                            {cartCount}
                        </span>
                    )}
                </NavLink>
                <NavLink to="/admin" className="text-lg md:text-2xl font-bold hover:text-yellow-400 transition">⚙️ Admin</NavLink>
            </div>
        </nav>
    )
}

export default Navbar