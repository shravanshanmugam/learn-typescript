import React from "react";

type ContainerProps = {
    styles: React.CSSProperties
    children: React.ReactNode
}
export const Container = ({styles, children}: ContainerProps) => {
    return <div style={styles}>Text container goes here!
        <div>{children}</div>
    </div>
}