import { useState } from "react";
import "./App.css";
import BannerManagement from "./pages/banners";
import CategoryManagement from "./pages/categorys";
import ProductManagement from "./pages/products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <>
      <div id="app-container">
        <BrowserRouter>
          <nav>
            <Link to="/">Dashboard</Link>|
            <Link to="/pages/banners">Manage Banner</Link>|
            <Link to="/pages/categorys">Manage Category</Link>|
            <Link to="/pages/products">Manage Product</Link>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Dashboard Component</h1>} />
            <Route path="/pages/banners" element={<BannerManagement />} />
            <Route path="/pages/categorys" element={<CategoryManagement />} />
            <Route path="/pages/products" element={<ProductManagement />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}

export default App;
