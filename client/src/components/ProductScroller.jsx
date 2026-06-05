import { useEffect, useState, useRef } from "react";
import "../styling/ProductScroller.css";
import {
  FiHeart,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

function ProductScroller({ title, apiEndpoint }) {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => setProducts(data.ProductList || data.products || []))
      .catch((err) => console.error(`Error fetching ${title}:`, err));
  }, [apiEndpoint]);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  const placeholders = Array.from({ length: 5 });

  return (
    <section className="pscroll-section">
      <div className="pscroll-header">
        <h2>{title}</h2>
      </div>
      <div className="pscroll-wrapper">
        <button className="pscroll-btn pscroll-prev" onClick={() => scroll(-1)}>
          <FiChevronLeft />
        </button>
        <div className="pscroll-track" ref={scrollRef}>
          {(products.length > 0 ? products : placeholders).map((p, i) => (
            <div key={i} className={`pscroll-card ${!p ? "skeleton" : ""}`}>
              {p ? (
                <>
                  <div className="pscroll-card-img-wrap">
                    {p.discount && (
                      <span className="pscroll-badge">{p.discount}% OFF</span>
                    )}
                    <button className="pscroll-wish">
                      <FiHeart />
                    </button>
                    <img src={p.images?.[0] || p.image_url} alt={p.name} />
                  </div>
                  <div className="pscroll-card-info">
                    <p className="pscroll-rating">
                      ⭐ {p.rating || "4.2"} <span>({p.reviews || 250})</span>
                    </p>
                    <p className="pscroll-name">{p.name}</p>
                    <p className="pscroll-desc">{p.description}</p>
                    <div className="pscroll-price">
                      <span className="price-new">
                        ₹{p.price?.toLocaleString()}
                      </span>
                      {p.original_price && (
                        <span className="price-old">
                          ₹{p.original_price?.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="pscroll-stock">
                      {p.in_stock ? "In Stock" : "Out of Stock"}
                    </p>
                    <button className="pscroll-add-btn">
                      <FiShoppingCart /> Add to Cart
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="sk-img" />
                  <div className="sk-line w80" />
                  <div className="sk-line w60" />
                  <div className="sk-line w40" />
                </>
              )}
            </div>
          ))}
        </div>
        <button className="pscroll-btn pscroll-next" onClick={() => scroll(1)}>
          <FiChevronRight />
        </button>
      </div>
      <div className="pscroll-dots">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="pscroll-dot" />
        ))}
      </div>
    </section>
  );
}

export default ProductScroller;
