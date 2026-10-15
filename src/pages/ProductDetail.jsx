import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
    const { id } = useParams()
    const API_URL = `${import.meta.env.VITE_API_URL}/api/products/${id}`
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setProduct(response.data))
            .catch(error => console.error(error))
    }, [id])

    if (!product) return <p>Chargement...</p>

    function addToCart() {
        axios.post(`${import.meta.env.VITE_API_URL}/api/cart`, { product_id: product.id })
            .then(() => alert('Produit ajouté au panier !'))
            .catch(error => console.error(error))
    }

    return (
        <div className="container mx-auto p-6">
            <Link to="/" className="inline-block mb-6 text-indigo-600 hover:text-indigo-800">← Retour</Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img src={product.image} className="w-full h-96 object-contain rounded-xl bg-gray-100 p-4" />
                <div>
                    <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-indigo-600 mb-4">{product.price} $</p>
                    <p className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mb-4">{product.category}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <button onClick={addToCart} className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition text-lg font-bold">🛒 Ajouter au Panier</button>
                </div>
            </div>
        </div>
    )

}

export default ProductDetail