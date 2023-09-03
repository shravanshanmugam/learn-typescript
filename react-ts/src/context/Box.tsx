import {ThemeContext} from "./ThemeParent";
import React from "react";

export const Box = () => {
  const theme = React.useContext(ThemeContext);
  return <div>
    <h2 style={{backgroundColor: theme.main, color: theme.text}}>Box here!</h2>
  </div>
}