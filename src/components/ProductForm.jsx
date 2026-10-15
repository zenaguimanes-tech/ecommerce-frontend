import { useState, useEffect } from "react";

function ProductForm({ onSubmit, editingProduct, onCancel }) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name)
            setPrice(editingProduct.price)
            setImage(editingProduct.image)
            setDescription(editingProduct.description)
            setCategory(editingProduct.category)
        } else {
            setName('')
            setPrice('')
            setImage('')
            setDescription('')
            setCategory('')
        }
    }, [editingProduct])

    function handleSubmit(e) {
        e.preventDefault()
        const product = { name, price, image, description, category }
        onSubmit(product)
        if (!editingProduct) {
            setName('')
            setPrice('')
            setImage('')
            setDescription('')
            setCategory('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">{editingProduct ? 'Modifier un produit' : 'Ajouter un produit'}</h2>

            <input
                type="text"
                placeholder="Nom du produit"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none mb-4"
            />

            <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none mb-4" />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none mb-4" />
            <input type="text" placeholder="URL de l'image" value={image} onChange={(e) => setImage(e.target.value)} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none mb-4" />
            <input type="text" placeholder="Catégorie" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none mb-4" />

            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                {editingProduct ? 'Modifier' : 'Ajouter'}
            </button>

            {editingProduct && (
                <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 ml-2">
                    Annuler
                </button>
            )}
        </form>
    )
}

export default ProductForm