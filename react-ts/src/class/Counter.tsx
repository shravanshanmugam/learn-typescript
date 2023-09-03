import {Component} from "react";

type CounterProps = {
    message: string
}
type CounterState = {
    count: number;
}

export class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0
    }
    increment = () => {
        this.setState((prevState: CounterState) => ({ count: prevState.count + 1}))
    }

    render() {
        return <div>
            <p>{this.props.message} {this.state.count}</p>
            <button type="submit" onClick={this.increment}>Increment</button>
        </div>;
    }
}