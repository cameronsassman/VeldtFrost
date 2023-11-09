import { useState, useEffect } from "react";
import classes from "./Slider.module.css";

import Strawberry from "../../assets/strawberry.png";
import All from "../../assets/all.png";
import Caramel from "../../assets/caramel.png";
import Chocolate from "../../assets/chocolate.png";

const data = [
  {
    image: All,
    sub: "Special Offers",
    title:
      " Join our Frosty Club and enjoy exclusive deals, early access to new flavors, and a free scoop on your birthday!",
  },
  {
    image: Strawberry,
    sub: "Golden Caramel Crunch",
    title:
      "A delightful blend of rich custard with swirls of homemade caramel and crunchy praline pieces.",
  },
  {
    image: Caramel,
    sub: "Tropical Passionfruit Bliss",
    title:
      "Dive into summer any time of the year with our exotic passionfruit custard dotted with fresh mango chunks.",
  },
  {
    image: Chocolate,
    sub: "Velvety Chocolate Truffle",
    title:
      "For the ultimate chocolate lover, dive into deep, dark chocolate custard with soft truffle bites.",
  },
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.imageslider}>
      <img
        src={data[currentImageIndex].image}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <div className={classes.caption}>
        <div className={classes.text}>
          <h4>{data[currentImageIndex].sub}</h4>
          <h1>{data[currentImageIndex].title}</h1>
        </div>
        <div className={classes.btn}>
          <a href="">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
