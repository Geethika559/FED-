import React, { Component } from "react";
class Color extends Component{
    constructor(props){
        super(props);
        this.state={
            color:"FF0F"
        };
    }
    redHandler=()=>{
        this.setState({color:"#FF0000"});
    };
    greenHandler=()=>{
        this.setState({color:"#00FF00"});
    };
    blueHandler=()=>{
        this.setState({color:"#0000FF"});
    };
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>Hello</h1>
                <button onClick={this.redHandler}>Red</button>
                <button onClick={this.greenHandler}>Green</button>
                <button onClick={this.blueHandler}>Blue</button>
            </div>
        )
    }
}
export default Color;