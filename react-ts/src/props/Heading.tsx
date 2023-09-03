type HeadingProps = {
    children: string
}
export const Heading = (props: HeadingProps) => {
    return <h2 style={{color: "purple"}}>{props.children}</h2>
}