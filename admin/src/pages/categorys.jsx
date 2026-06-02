import React, { useState, useEffect } from "react";

function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null); // Tracks ID for updates

  // 1. Fetch Categories on Load
  const fetchCategories = async () => {
    const response = await fetch("http://localhost:3000/Category/list");
    const data = await response.json();
    setCategories(data.Categorylist);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 2. Add or Update Handler
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    if (file) formData.append("image", file);

    const url = editId 
      ? `http://localhost:3000/Category/edit/${editId}` 
      : "http://localhost:3000/Category/add";
    
    const method = editId ? "PUT" : "POST";

    const response = await fetch(url, { method, body: formData });
    if (response.ok) {
      alert(editId ? "Updated" : "Added");
      setEditId(null); setName(""); setFile(null);
      fetchCategories();
    }
  };

  // 3. Delete Handler
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/Category/delete/${id}`, { method: "DELETE" });
    fetchCategories();
  };

  return (
    <div>
      <h1>Category Management</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>{editId ? "Update" : "Add"} Category</button>

      <h2>Categories</h2>
      {categories.map((category) => (
        <div key={category._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={category.image_url} alt={category.name} width="100" />
          <p>{category.name}</p>
          <button onClick={() => { setEditId(category._id); setName(category.name); }}>Edit</button>
          <button onClick={() => handleDelete(category._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}



export default CategoryManagement;