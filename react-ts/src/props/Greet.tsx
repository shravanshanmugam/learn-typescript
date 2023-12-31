type GreetProps = {
    name: string,
    messageCount?: number,
    loggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props;
    return <div className="greet"><h4>Welcome {props.loggedIn ? props.name : "Guest"}! You have {messageCount} unread messages!</h4></div>
}