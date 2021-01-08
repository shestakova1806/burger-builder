import React from "react";

import classes from "./Toolbar.module.css";
import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { NavigationItem } from "../NavigationItems/NavigationItem/NavigationItem";

export const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </header>
);
