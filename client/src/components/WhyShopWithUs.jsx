import "../styling/WhyShopWithUs.css";
import whyshopwithus1 from "../assets/shopwithus/1.png";
import whyshopwithus2 from "../assets/shopwithus/2.png";
import whyshopwithus3 from "../assets/shopwithus/3.png";
import whyshopwithus4 from "../assets/shopwithus/4.png";
import whyshopwithus5 from "../assets/shopwithus/5.png";
const features = [
  { icon: <img src={whyshopwithus1} alt="Secure Shopping" />, title: "Secure Shopping", desc: "Safe and encrypted payment gateways." },
  { icon: <img src={whyshopwithus2} alt="Fast Delivery" />, title: "Fast Delivery", desc: "Reliable shopping with live order tracking." },
  { icon: <img src={whyshopwithus3} alt="Easy Returns" />, title: "Easy Returns", desc: "Hassle-free return and refund process." },
  { icon: <img src={whyshopwithus4} alt="24/7 Support" />, title: "24/7 Support", desc: "Dedicated customer assistance anytime." },
  { icon: <img src={whyshopwithus5} alt="Affordable Pricing" />, title: "Affordable Pricing", desc: "Competitive prices and daily offers." },
];

function WhyShopWithUs() {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Shop With Us</h2>
      <p className="why-subtitle">
        Shop with confidence and enjoy quality products, affordable prices, secure payments,
        fast delivery, and dedicated customer support all in one seamless shopping experience.
      </p>
      <div className="why-grid">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="why-card">
            <div className="why-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyShopWithUs;
