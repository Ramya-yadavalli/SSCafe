
import {
  Coffee,
  MapPin,
  Truck,
} from "lucide-react";

import "./AboutUs.css";

const features = [
  {
    icon: <Coffee size={32} />,
    title: "Quality Coffee",
    description: "Fresh and rich coffee made with quality ingredients.",
  },
  {
    icon: <MapPin size={32} />,
    title: "Our Branches",
    description: "Visit our coffee shops and enjoy your favorite coffee.",
  },
  {
    icon: <Truck size={32} />,
    title: "Free Delivery",
    description: "Get your favorite coffee delivered to your doorstep.",
  },
];

function AboutUs() {
  return (
    <section className="about-section" id="about">

      {/* Section Heading */}
      <div className="about-heading">
        <span>ABOUT US</span>
        <h2>WHY CHOOSE US</h2>
      </div>

      {/* Main About Container */}
      <div className="about-container">

        {/* Left Side Image */}
        <div className="about-image">
          <img
            src="https://erickdc7.github.io/coffee-shop-website-design/image/about-img.png"
            alt="Freshly prepared coffee"
          />
        </div>

        {/* Right Side Content */}
        <div className="about-content">

          <h3>What's Make Our Coffee Special!</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel rerum laboriosam reprehenderit ipsa id repellat odio
            illum, voluptas, necessitatibus assumenda adipisci.
            Hic, maiores iste? Excepturi illo dolore mollitia qui quia.
          </p>

          <p>
            Enjoy the perfect coffee experience with freshly selected
            coffee beans, rich aroma and carefully prepared drinks.
            We make every cup special for you.
          </p>

          <a href="#menu" className="about-btn">
            Read More
          </a>

          {/* Three Feature Boxes - Below Right Side Text */}
          <div className="about-features">

            {features.map((feature, index) => (
              <div className="about-feature-card" key={index}>

                <div className="about-feature-icon">
                  {feature.icon}
                </div>

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;
