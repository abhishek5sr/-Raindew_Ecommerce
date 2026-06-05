import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import BannerManagement from "./pages/banners";
import CategoryManagement from "./pages/categorys";
import ProductManagement from "./pages/products";

function App() {
  return (
    <Router>
      <div className="admin-layout">
        <aside className="sidebar">
          <h2> Dashboard</h2>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/banners">Manage Banners</Link>
            <Link to="/categorys">Manage Categories</Link>
            <Link to="/products">Manage Products</Link>
          </nav>
        </aside>
        <main className="content">
          <Routes>
            <Route path="/" element={<h1>Welcome Admin</h1>} />
            <Route path="/banners" element={<BannerManagement />} />
            <Route path="/categorys" element={<CategoryManagement />} />
            <Route path="/products" element={<ProductManagement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;