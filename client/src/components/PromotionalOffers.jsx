import { useEffect, useState } from "react";
import "../styling/PromotionalOffers.css";

function PromotionalOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Banner/list")
      .then(res => res.json())
      .then(data => setOffers(data.Bannerlist || []))
      .catch(err => console.error("Error fetching promotions:", err));
  }, []);

  const placeholders = Array.from({ length: 6 });

  return (
    <section className="promo-section">
      <h2 className="promo-title">Promotional Offer</h2>
      <div className="promo-grid">
        {(offers.length > 0 ? offers : placeholders).map((offer, i) => (
          <div key={i} className={`promo-card ${!offer ? "skeleton" : ""}`}>
            {offer
              ? <img src={offer.image_url} alt={offer.title || "Offer"} />
              : <div className="skeleton-block" />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromotionalOffers;
