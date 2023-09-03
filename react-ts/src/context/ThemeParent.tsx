import React, {createContext, useState} from "react";
import {theme, ThemeProps, ThemeType} from "./theme";

type ThemeParentProps = {
    children: React.ReactNode;
}
export const ThemeContext = createContext<ThemeProps>(theme['primary'])

export const ThemeParent = ({children}: ThemeParentProps) => {
    const [selected, setSelected] = useState<ThemeType>('primary')
    return <div className="theme">
        <ThemeContext.Provider value={theme[selected]}>
            {children}
            <button onClick={() => setSelected("primary")}>Primary</button>
            <button onClick={() => setSelected("secondary")}>Secondary</button>
            <button onClick={() => setSelected("tertiary")}>Tertiary</button>
        </ThemeContext.Provider>
    </div>
}