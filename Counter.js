import React ,{Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    incrementHandler=()=>{
        this.setState({count:this.state.count+1});
    };
    decrementHandler=()=>{
        this.setState({count:this.state.count-1});
    };
    render(){
        return(
            <div>
                <button onClick={this.incrementHandler}>Increment</button>
                <span>{this.state.count}
                </span>
                <button onClick={this.decrementHandler}>Decrement</button>
            </div>
        )
    }
}
export default Counter;