import "../styling/HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner-content">
        <p className="hero-tagline">Everything You Need In One Place</p>
        <h1>From groceries and fashion to electronics and home essentials, explore thousands of products at unbeatable prices.</h1>
        <button className="hero-explore-btn">Explore Collection</button>
      </div>
    </section>
  );
}

export default HeroBanner;
