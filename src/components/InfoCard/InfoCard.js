import { useState } from "react";
import classes from "./InfoCard.module.css";

const cardData = [
  {
    front: "Unparalleled Creaminess",
    back: "Dive into the silkiest, richest, and most luxurious frozen custard you've ever tasted. Every scoop feels like a decadent embrace.",
    colour: "#ffc0cb",
  },
  {
    front: "Pure & Simple Ingredients",
    back: "We believe in simplicity. That's why our custard is crafted from the finest natural ingredients – farm-fresh cream, pure cane sugar, and golden egg yolks.",
    colour: "#d1d1f6",
  },
  {
    front: "Flavors Beyond Imagination",
    back: "From the classic vanilla bean to exotic tropical delights, embark on a journey of flavours that tease the palate and leave you craving more.",
    colour: "#c0fff4",
  },
  {
    front: " A Legacy of Craftsmanship",
    back: "Our custard-making tradition goes back decades. Perfected over generations, our secret recipe is a testament to our passion for the craft.",
    colour: "#ffd5c0",
  },
  {
    front: "Sustainability Matters",
    back: "We source our ingredients ethically, reducing our carbon footprint. Enjoying Frosty Delight means supporting a brighter, greener future.",
    colour: "#fff5c0",
  },
];

const InfoCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cornerRibbon}>Try Our Signature Creations!</div>
      <hr className={classes.botline} />
      <div className={classes.header}>
        <h2>Welcome to Veldt Frost: The Ultimate Frozen Custard Experience!</h2>
      </div>
      <hr className={classes.botline} />
      <div className={classes.cardlist}>
        {cardData.map((card, index) => (
          <div className={classes.circlecard} key={index}>
            <div
              className={classes.circle}
              style={{ background: [card.colour] }}
            >
              <div className={classes.content}>
                <div className={classes.title}>{card.front}</div>
                <div className={classes.infos}>
                  <div className={classes.info}>{card.back}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
