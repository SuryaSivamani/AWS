// import logo from './logo.svg';
import './App.css';
// import MyClassComponent from './myClassComponent';
// import Counter from './Counter';
// import Inputfield from './Inputfield';
//import Assignment1 from './Assignment1';
//import Assign from './Assign';
//import FavColor from './FavColor';
import React, {useState} from 'react';
import MultipleFunc from './MultipleFunc';
//import ArrayEx from './ArrayEx';
import ReactCheckboxAssign from './ReactCheckboxAssign';
//import ContactManage from './ContactManage';
//import EffectUser from './EffectUser';
// import FuncBudget from './FuncBudget';


function App() {

  /*CREATING USING A USESTATE HOOK AND ARRAY */
  // const [contacts, setContacts]=useState([]);
  // const contactManageHandler= (contact) =>{
  //   setContacts([...contacts,contact])
  //   console.log(contact)
  // }
  // const contacts =[
  //   {
  //     id:1,
  //     name: "surya",
  //     email: "surya@gamil.com" 
  //   },
  //   {
  //     id:2,
  //     name:"priya",
  //     email:"priya@gmail.com"
  //   }
  // ]
  return (
    <div className="App"> 
    {/* <ArrayEx /> */}
    <MultipleFunc />
    <ReactCheckboxAssign />
    {/* <Assign />   */}
    {/* <FuncBudget /> */}
    {/* <FavColor contacts={contacts}/>
    <ContactManage contactManageHandler={contactManageHandler} />
     */}
    {/* <EffectUser /> */}

      {/* <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Assignment1 /> */}
        {/* <MyClassComponent name ="Name"/>
        <Counter />
        <Inputfield /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     {/* </div> </header> */}
    </div>
  );
}

export default App;
