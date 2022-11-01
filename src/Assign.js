import React, { Component } from "react";

class Assign extends Component {
  state = {
    newUser: { TotalAmount:0,
                Insurance: 0, 
                Mortgage: 0,
                ChildCare: 0,
                Grocery: 0
              
              }
  };

  handleTotalAmount(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        TotalAmount: value,
       // Balance: parseInt(this.state.newUser.TotalAmount)
        
      }
    }));
 
  }

  handleInsurance(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        Insurance: value,
        //Balance: this.state.newUser.TotalAmount - parseInt(value) 
      }
    }));
    
  }
  handleMortgage(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        Mortgage: value,
        //Balance: this.state.newUser.TotalAmount -(parseInt(value) + parseInt(this.state.newUser.Insurance))
      }
    }));
   
}

handleChildCare(e) {
  e.preventDefault();
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        ChildCare: value,
       // Balance: this.state.newUser.TotalAmount -(parseInt(value) + parseInt(this.state.newUser.Insurance) + parseInt(this.state.newUser.Mortgage))
      }
    }));
   
}
handleGrocery(e) {
  e.preventDefault();
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        Grocery: value,
        //Balance: this.state.newUser.TotalAmount-(parseInt(value) + parseInt(this.state.newUser.Insurance) + parseInt(this.state.newUser.Mortgage) + parseInt(this.state.newUser.ChildCare)) 
      }
    }));
    
}


getTotal() {
  return parseInt(this.state.newUser.TotalAmount)-(parseInt(this.state.newUser.Insurance) + parseInt(this.state.newUser.Mortgage) +parseInt(this.state.newUser.Grocery) +parseInt(this.state.newUser.ChildCare));
}

render() {
  
  return (
    <div>
        <label>Total Amount</label>
        <input
          type="number"
          onChange={this.handleTotalAmount.bind(this)}
          placeholder="Enter Total Budget">
          </input>
        <br>
        </br>
        <p></p>
        Balance: {this.getTotal()}
        <br></br>
        <label>Insurance:</label>
      <input
        type="number"
        onChange={this.handleInsurance.bind(this)}
        placeholder="Enter Insurance"
      />
      <br>
      </br>
      <label>Mortgage:</label>
      <input
        type="number"
        onChange={this.handleMortgage.bind(this)}
        placeholder="Enter Mortgage"
      />
      <br>
      </br>
      <label>ChildCare:</label>
       <input
        type="number"
        onChange={this.handleChildCare.bind(this)}
        placeholder="Enter ChildCare"
      />
      <br>
      </br>
      <label>Grocery:</label>
       <input
        type="number"
        onChange={this.handleGrocery.bind(this)}
        placeholder="Enter Grocery"
      />

      
    </div>
  );
}
}
export default Assign;
