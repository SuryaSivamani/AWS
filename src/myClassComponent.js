import React from "react";

class myClassComponent extends React.Component
{
    constructor()
    {
        super();
        this.state= {
            Id: '102',
            age: '24',
            name: 'surya'
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState()
    {
        this.setState(
            {
                age:'25'
            }
        )
    }
render()
{
    return (
        <div>
            <h3>My Class component</h3>
            <h2>{this.props.name}</h2>
            <h3>Age is: {this.state.age}</h3>
            <button onClick={this.changeState}>Change State</button>
        </div>
    )


}
}
export default myClassComponent;