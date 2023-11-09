import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div class={classes.container}>
      <div class={classes.contents}>
        <div className={classes.newsletter}>
          <h2 className={classes.title}>Sign up for Frosty News</h2>
          <p className={classes.paragraph}>
            Visit Us Today! Dive into the world of Frosty Delight and discover
            why our frozen custard is the talk of the town.
          </p>
          <div className={classes.field}>
                <input className={classes.input} type="email" placeholder="Email address"  />
                <a href="" className={classes.btn}>Sign Up</a>
          </div>
          <p className={classes.extra}>
          Enjoy responsibly. Every moment with Veldt Frost is a celebration.
          </p>
        </div>
      </div>
      <div className={classes.ribbon}>
        <p className={classes.ribbontext}>&#x1F469;&#x200D;&#x1F373; - <a href="">Join Our Team! </a></p>
        <p className={classes.ribbontext}>&#x1F4CD; - <a href="">Cape Town, South Africa</a></p>
        <p className={classes.ribbontext}>&#x1F4DE; - <a href="">+27 12 345 6789</a></p>
        <p className={classes.ribbontext}>&#x1F6CD;&#xFE0F;; - <a href="">Shop Now</a></p>
      </div>
    </div>
  );
};

export default Footer;
