import React from "react";
import { css } from "/styled-system/css";
export const App = () => (
  <div>
    <h1 className={css({
      bg: 'red.400'
    })}>Welcome to Meteor!</h1>
  </div>
);
