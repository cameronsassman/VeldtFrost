import VeldtFrost from "../../assets/Veldt_Frost.png";
import classes from "./NavBar.module.css";

const Navbar = () => {
  return (
      <div className={classes.container}>
        <div className={classes.nav}>
          <div className={classes.navitems}>
            <a href="" className={classes.navitem}>
              Home
            </a>
            <a href="" className={classes.navitem}>
              About
            </a>
          </div>
          <img className={classes.logo} src={VeldtFrost} alt="VeldtFrost" />
          <div className={classes.navitems}>
            <a href="" className={classes.navitem}>
              Product
            </a>
            <a href="" className={classes.navitem}>
              Contact
            </a>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
