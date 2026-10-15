import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CartPage() {
    const API_URL = import.meta.env.VITE_API_URL + "/api/cart"
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setCart(response.data))
    }, [])

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/api/products")
            .then(response => setProducts(response.data))
    }, [])

    function removeFromCart(id) {
        axios.delete(`${import.meta.env.VITE_API_URL}/api/cart/${id}`)
            .then(() => setCart(cart.filter(product => product.id !== id)))
    }

    const total = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.product_id)
        return product ? sum + Number(product.price) : sum
    }, 0)


    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Panier</h2>
            <Link className="inline-block mb-6 text-indigo-600 hover:text-indigo-800" to='/'>Retour</Link>
            {cart.length === 0 ? (<p className="text-center text-gray-500 text-xl mt-8">Panier vide</p>) : (
                <div>
                    {cart.map(item => {
                        const product = products.find(p => p.id === item.product_id)
                        if (!product) return null
                        return (
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md mb-4" key={item.id}>
                                <img src={product.image} className="w-20 h-20 object-cover rounded-lg" />
                                <div className="flex-1 ml-4">
                                    <p className="font-semibold">{product.name}</p>
                                    <p className="text-indigo-600">{product.price} $</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600">🗑️</button>
                            </div>
                        )
                    })}
                </div>
            )}
            <p className="text-2xl font-bold text-indigo-600 mt-6">Total: {total}$</p>
        </div>
    )
}

export default CartPage