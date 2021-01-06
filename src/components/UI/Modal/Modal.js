import React from "react";

import classes from "./Modal.module.css";

export const Modal = (props) => (
  <div className={classes.Modal}>{props.children}</div>
);
