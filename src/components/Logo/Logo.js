import React from "react";

import BurgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

export const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="MyBurger" />
  </div>
);
