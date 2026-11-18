
import type { FC } from "react";
import "./OurMenu.css";

interface MenuItem {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/menu-1.png",
    name: "Our Special Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, sed.",
    price: "$8.99",
  },
  {
    id: 2,
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/menu-2.png",
    name: "Our Special Coffee",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, fugit.",
    price: "$8.99",
  },
  {
    id: 3,
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/menu-3.png",
    name: "Our Special Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae.",
    price: "$8.99",
  },
  {
    id: 4,
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/menu-4.png",
    name: "Our Special Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quas.",
    price: "$8.99",
  },
  {
    id: 5,
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/menu-5.png",
    name: "Our Special Coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae.",
    price: "$8.99",
  },
  {
    id: 6,
    image: "https://erickdc7.github.io/coffee-shop-website-design/image/menu-6.png",
    name: "Our Special Coffee",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, expedita!",
    price: "$8.99",
  },
];

const OurMenu: FC = () => {
  return (
    <section className="menu-section" id="menu">

      {/* Section Heading */}
      <div className="menu-heading">
        <span>OUR MENU</span>
        <h2>Popular Menu</h2>
      </div>

      {/* Menu Items */}
      <div className="menu-container">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>

            {/* Animated Border Corners */}
            <span className="menu-corner top-left"></span>
            <span className="menu-corner top-right"></span>
            <span className="menu-corner bottom-left"></span>
            <span className="menu-corner bottom-right"></span>

            {/* Coffee Image */}
            <div className="menu-image">
              <img src={item.image} alt={item.name} />
            </div>

            {/* Menu Details */}
            <div className="menu-details">
              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="menu-price">
                {item.price}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default OurMenu;
