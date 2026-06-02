import React, { useState, useEffect } from "react";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Added to store category list
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [files, setFiles] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch Products and Categories
  const fetchData = async () => {
    const prodRes = await fetch("http://localhost:3000/Product/list");
    const prodData = await prodRes.json();
    setProducts(prodData.ProductList);

    const catRes = await fetch("http://localhost:3000/Category/list");
    const catData = await catRes.json();
    setCategories(catData.Categorylist);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category); // Sending category ID
    for (let i = 0; i < files.length; i++) data.append("images", files[i]);

    const url = editId
      ? `http://localhost:3000/Product/edit/${editId}`
      : "http://localhost:3000/Product/add";
    await fetch(url, { method: editId ? "PUT" : "POST", body: data });

    setEditId(null);
    setFormData({ name: "", description: "", price: "", category: "" });
    fetchData();
  };

  return (
    <div>
      <h1>Product Management</h1>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />

      {/* Category Selection Dropdown */}
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>

      <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"} Product
      </button>

      <h2>Products</h2>
      {products.map((p) => (
        <div
          key={p._id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <p>
            {p.name} - {p.category?.name || "No Category"}
          </p>
          <p>
            {p.description} - ${p.price.toFixed(2)}
          </p>
          <button
            onClick={() => {
              setEditId(p._id);
              setFormData(p);
            }}
          >
            Edit
          </button>
          <div>
            {p.images &&
              p.images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Product ${p.name} ${index}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "5px",
                    objectFit: "cover",
                  }}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductManagement;
