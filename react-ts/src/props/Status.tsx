type StatusProps = {
    status: 'loading' | 'success' | 'failure'
}
export const Status = (props: StatusProps) => {
    const status = props.status;
    let message: string = "";
    if (status === "loading") {
        message = "Loading...";
    } else if (status === "success") {
        message = "Data fetched successfully!";
    } else if (status === "failure") {
        message = "Error fetching data";
    }
    return <div className="status"><h3>Status - {message}</h3></div>
}