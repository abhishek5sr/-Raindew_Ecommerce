import { useEffect, useState } from "react";
import "../styling/CategorySection.css";

function CategorySection({ title, apiEndpoint, color }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => setItems(data.Categorylist || data.items || []))
      .catch((err) => console.error(`Error fetching ${title}:`, err));
  }, [apiEndpoint]);

  return (
    <section className="cat-section">
      <div
        className="cat-section-header"
        style={{ backgroundColor: color || "#ff6f00" }}
      >
        <h2>{title}</h2>
        <button className="cat-view-all">&#8250;</button>
      </div>
      <div className="cat-grid">
        {items.length > 0
          ? items.map((item, i) => (
              <div key={i} className="cat-card">
                <img src={item.image_url} alt={item.name} />
                <p>
                  {item.name} <span>&#8250;</span>
                </p>
              </div>
            ))
          : Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="cat-card skeleton">
                <div className="skeleton-img" />
                <div className="skeleton-text" />
              </div>
            ))}
      </div>
    </section>
  );
}

export default CategorySection;
