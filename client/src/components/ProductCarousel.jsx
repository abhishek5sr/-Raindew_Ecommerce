const ProductCarousel = ({ title, products }) => (
  <section className="carousel-section">
    <h3>{title}</h3>
    <div className="product-track">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} />
          <h4>{p.name}</h4>
          <p>{p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  </section>
);
export default ProductCarousel;