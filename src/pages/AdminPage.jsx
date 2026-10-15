import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from '../components/ProductForm';
import AdminProductList from '../components/AdminProductList'


function AdminPage() {
    const API_URL = import.meta.env.VITE_API_URL + '/api/products'
    const [products, setProducts] = useState([])
    const [editingProduct, setEditingProduct] = useState(null)

    useEffect(() => {
        axios.get(API_URL)
            .then(response => setProducts(response.data))
            .catch(error => console.error(error))
    }, [])

    function addProduct(product) {
        axios.post(API_URL, product)
            .then(response => setProducts([...products, response.data]))
            .catch(error => console.error(error))
    }

    function updateProduct(id, product) {
        axios.put(`${API_URL}/${id}`, product)
            .then(response => {
                setProducts(products.map(p => p.id === id ? response.data : p))
                setEditingProduct(null)
            })
            .catch(error => console.error(error))
    }

    function deleteProduct(id) {
        axios.delete(`${API_URL}/${id}`)
            .then(() => setProducts(products.filter(p => p.id !== id)))
            .catch(error => console.error(error))
    }

    function startEdit(product) {
        setEditingProduct(product)
    }

    function cancelEditing() {
        setEditingProduct(null)
    }

    return (
        <div className="mx-auto p-6 container">
            <h1 className="text-3xl font-bold mb-6">⚙️ Admin - Gestion des produits</h1>
            <ProductForm
                onSubmit={editingProduct ? (data) => updateProduct(editingProduct.id, data) : addProduct}
                editingProduct={editingProduct}
                onCancel={cancelEditing}
            />
            <AdminProductList
                products={products}
                onEdit={startEdit}
                onDelete={deleteProduct}
            />
        </div>
    )
}

export default AdminPage