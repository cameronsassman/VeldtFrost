import classes from "./Responses.module.css";

const Reviews = () => {
  return (
    <div class={classes.container}>
      <div className={classes.ribbon}>
        We value honesty, transparency and being environmentally responsible
      </div>
      <div class={classes.content}>
        <div class={classes.review}>
          <div class={classes.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <h3 class={classes.quote}>
            "The creamiest custard I've ever had! Every flavor is a new
            adventure."
          </h3>
          <h2 className={classes.name}>Jordan T</h2>
        </div>
        <div class={classes.review}>
          <div class={classes.rating}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <h3 class={classes.quote}>
            "Absolutely obsessed. I can't imagine summer without it!"
          </h3>
          <h2 className={classes.name}>Mia K</h2>
        </div>
      </div>
      <div className={classes.ribbon}>
        Proudly South African and organically sourced
      </div>
    </div>
  );
};

export default Reviews;
