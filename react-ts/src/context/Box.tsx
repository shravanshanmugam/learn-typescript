import {ThemeContext} from "./ThemeContext";
import React from "react";

type H2Props = {
  theme: {
    main: string
    text: string
  }
  children: React.ReactNode
}
export const Box = () => {
  const {primary, secondary} = React.useContext(ThemeContext);
  return <div>
    <H2 theme={primary}>
      Primary theme
    </H2>
    <H2 theme={secondary}>
      Secondary theme
    </H2>
  </div>
}

type H2Styles = {
  backgroundColor: string
  color: string
}
function H2({theme, children}: H2Props) {
  const styles: H2Styles = {backgroundColor: theme.main, color: theme.text}
  return <h2 style={styles}>{children}</h2>
}