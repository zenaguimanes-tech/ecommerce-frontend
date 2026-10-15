import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function Home() {
    const API_URL = import.meta.env.VITE_API_URL + '/api/products'
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(API_URL)
            .then(response => { setProducts(response.data); setLoading(false) })
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-2">Nos Produits</h1>
            <p className="text-gray-600 mb-8">Découvrez notre sélection de laptops</p>
            {loading ? <p className="text-center text-gray-500 text-xl">Chargement...</p> :
                <ProductList products={products} />}
        </div>
    )
}

export default Home