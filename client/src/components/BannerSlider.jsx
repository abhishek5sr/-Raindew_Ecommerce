import React, { useEffect, useState, useRef } from "react";
import "../styling/BannerSlider.css";

const BannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/Banner/list")
      .then((res) => res.json())
      .then((data) => setBanners(data.Bannerlist))
      .catch((err) => console.error("Error fetching banners:", err));
  }, []);

  useEffect(() => {
    if (banners.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [banners.length]);

  const goTo = (idx) => {
    clearInterval(timerRef.current);
    setCurrent((idx + banners.length) % banners.length);
  };

  if (!banners.length) {
    return (
      <section className="hero-container">
        <p className="no-banners">No banners to display.</p>
      </section>
    );
  }

  const offset = -(current * 73) + 13.5;

  return (
    <section className="hero-container">
      <button className="carousel-btn prev" onClick={() => goTo(current - 1)}>
        &#8249;
      </button>

      <div
        className="banner-track"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {banners.map((banner, idx) => (
          <div
            key={banner._id}
            className={`banner-item${idx === current ? " active" : ""}`}
            onClick={() => goTo(idx)}
          >
            <img
              src={banner.image_url}
              alt={banner.title}
              className="banner-image"
            />
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={() => goTo(current + 1)}>
        &#8250;
      </button>

      <div className="carousel-dots">
        {banners.map((_, idx) => (
          <button
            key={idx}
            className={`dot${idx === current ? " active" : ""}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;
