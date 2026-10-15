import { Link } from 'react-router-dom'

function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform">
            <div className='relative overflow-hidden'>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover relative hover:scale-110 transition-transform" />
                <span className='absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded'>{product.category}</span>
            </div>
            <div className="p-4">
                <h3>{product.name}</h3>
                <p className='text-2xl font-bold text-indigo-600'>{product.price} $</p>
                <Link to={`/product/${product.id}`} className="inline-block mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Voir</Link>
            </div>
        </div>
    )
}

export default ProductCard