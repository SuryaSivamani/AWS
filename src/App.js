// import logo from './logo.svg';
import './App.css';

// import MyClassComponent from './myClassComponent';
// import Counter from './Counter';
// import Inputfield from './Inputfield';
//import Assignment1 from './Assignment1';
//import Assign from './Assign';
//import FavColor from './FavColor';
import React from 'react';
// import ExampleClass from './ExampleClass';
//import FunctionChildProps from './FunctionChildProps';
// import FunctionProp from './FunctionProp';
//  import ClassProps from './ClassProps';
import Product from './Product';
// import MultipleFunc from './MultipleFunc';
//import ArrayEx from './ArrayEx';
// import ReactCheckboxAssign from './ReactCheckboxAssign';
// import Ref from './Ref';
// import ReactForm from './ReactForm';
// import Practice from './Practice';
//import ReactFormInput from './ReactFormInput';
//import ReactFormInput from './ReactFormInput';
//import ContactManage from './ContactManage';
//import EffectUser from './EffectUser';
//import FuncBudget from './FuncBudget';


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
    {/* <ExampleClass /> */}
    {/* <FunctionProp /> */}
    {/* <ClassProps /> */}
    {/* <ArrayEx /> */}
    {/* <MultipleFunc />
    <ReactCheckboxAssign />
    <Ref /> */}
    {/* <Practice /> */}
    <Product />
    {/* <ReactForm /> */}
    {/* <ReactFormInput /> */}
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
