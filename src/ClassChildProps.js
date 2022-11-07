import React, { Component } from 'react';

class ClassChildProps extends Component {
   
        state={
            firstname: "Surya",
            name:""
        }
    
    handlChange=()=>{
        this.setState(
            (state,props)=>{
                return {
                    name: `${state.firstname} ${props.lastname}`
                }
            }
        )
    }
    render() {
        return (
            <div>
                {/* <h2>Class Name is {this.props.name}</h2> */}
                <button onClick={this.handlChange}>Click Me</button>
                <h2>{this.state.name}</h2>
            </div>
        );
    }
}

export default ClassChildProps;