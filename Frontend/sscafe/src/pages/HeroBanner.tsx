
import { useState } from "react";
import "./HeroBanner.css";

const coffeeImages = [
  {
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/home-img-1.png",
    name: "Hot Coffee",
  },
  {
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/home-img-2.png",
    name: "Coffee Mug",
  },
  {
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/home-img-3.png",
    name: "Cappuccino",
  },
];

function HeroBanner() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="hero" id="home">

      {/* Background Image */}
      <div className="hero-background"></div>

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <h1>
            Fresh Coffee
            <br />
            in the Morning
          </h1>

          <p>
            Start your day with a perfect cup of coffee.
            Enjoy the rich aroma and fresh taste of our
            specially brewed coffee.
          </p>

          <a href="#menu" className="hero-btn">
            Buy One Now
          </a>
        </div>

        {/* Right Coffee Image */}
        <div className="hero-image-container">
          <img
            src={coffeeImages[activeImage].image}
            alt={coffeeImages[activeImage].name}
            className="hero-main-image"
          />

          {/* Three Coffee Image Selectors */}
          <div className="hero-image-selectors">
            {coffeeImages.map((coffee, index) => (
              <button
                key={coffee.name}
                className={
                  activeImage === index
                    ? "hero-selector active"
                    : "hero-selector"
                }
                onClick={() => setActiveImage(index)}
                aria-label={`Show ${coffee.name}`}
              >
                <img src={coffee.image} alt="" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroBanner;
