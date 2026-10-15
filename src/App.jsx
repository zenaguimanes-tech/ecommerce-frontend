import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import CartPage from "./pages/CartPage"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App