import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import BannerSlider from "./components/bannerSlider";
import CategorySection from "./components/CategorySection";
import PromotionalOffers from "./components/PromotionalOffers";
import ProductScroller from "./components/ProductScroller";
import WhyShopWithUs from "./components/WhyShopWithUs";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <NavMenu />

      <BannerSlider />

      <CategorySection
        title="Grocery"
        apiEndpoint="http://localhost:3000/Category/list"
        color="#ff6f00"
      />
      <CategorySection
        title="Fashion"
        apiEndpoint="http://localhost:3000/Category/list/"
        color="#c2185b"
      />
      <CategorySection
        title="Electronics"
        apiEndpoint="http://localhost:3000/Category/list/electronics"
        color="#1565c0"
      />

      <PromotionalOffers />

      <ProductScroller
        title="All Products"
        apiEndpoint="http://localhost:3000/Product/list"
      />

      <WhyShopWithUs />

      <HeroBanner />

      <Footer />
    </>
  );
}

export default App;
