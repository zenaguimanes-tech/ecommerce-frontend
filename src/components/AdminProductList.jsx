function AdminProductList({ products, onEdit, onDelete }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Liste des produits</h2>
            {products.map(product => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md mb-4">
                    <img src={product.image} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1 ml-4">
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-indigo-600">{product.price} $</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <div>
                        <button onClick={() => onEdit(product)} className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 mr-2">✏️</button>
                        <button onClick={() => onDelete(product.id)} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600">🗑️</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AdminProductList
