import React, { useState, useEffect } from "react";

function BannerManagement() {
  const [banners, setBanners] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [editId, setEditId] = useState(null); // Tracks ID for updates

  // 1. Fetch Banners on Load
  const fetchBanners = async () => {
    const response = await fetch("http://localhost:3000/Banner/list");
    const data = await response.json();
    setBanners(data.Bannerlist);
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // 2. Add or Update Handler
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    if (file) formData.append("image", file);

    const url = editId 
      ? `http://localhost:3000/Banner/edit/${editId}` 
      : "http://localhost:3000/Banner/add";
    
    const method = editId ? "PUT" : "POST";

    const response = await fetch(url, { method, body: formData });
    if (response.ok) {
      alert(editId ? "Updated" : "Added");
      setEditId(null); setTitle(""); setFile(null);
      fetchBanners();
    }
  };

  // 3. Delete Handler
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/Banner/delete/${id}`, { method: "DELETE" });
    fetchBanners();
  };

  return (
    <div>
      <h1>Banner Management</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSubmit}>{editId ? "Update" : "Add"} Banner</button>

      <h2>Banners</h2>
      {banners.map((banner) => (
        <div key={banner._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={banner.image_url} alt={banner.title} width="100" />
          <p>{banner.title}</p>
          <button onClick={() => { setEditId(banner._id); setTitle(banner.title); }}>Edit</button>
          <button onClick={() => handleDelete(banner._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BannerManagement;