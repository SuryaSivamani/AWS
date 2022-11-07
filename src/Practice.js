
import React, { useEffect, useState } from 'react';

function Practice(props) {
const [product, setProduct] = useState([])
let prId;
let prName;
let prDesc;
let prPrice;
let pSearch;

function handleChange(e) {
 if (e.target.id == "pId") {
 prId = e.target.value
 }
 else if (e.target.id == "pName") {
 prName = e.target.value
 }
 else if (e.target.id == "pDesc") {
 prDesc = e.target.value
 }
 else if (e.target.id == "pPrice") {
 prPrice = e.target.value
 }
 else if(e.target.id="search")
 {
    pSearch=e.target.value
 }
 }

 function add() {
 setProduct([...product, {
    prId:prId, 
    prName:prName,
    prDesc:prDesc,
    prPrice:prPrice }])
 console.log(product)
 }

 useEffect(()=>{
    
 document.getElementById("pId").value= " "
 document.getElementById("pName").value= " "
 document.getElementById("pDesc").value= " "
 document.getElementById("pPrice").value= " "
 })

//  function searchid()
//  {
//     console.log(product.pSearch)
//  }


 return (
 <div>

 <div>
 <h1>Product Information:</h1>
 Product ID: <input type="text" onChange={handleChange} id="pId" /><br></br><br></br>
 Product Name: <input type="text" onChange={handleChange} id="pName" /><br></br><br></br>
 Product Desc: <input type="text" onChange={handleChange} id="pDesc" /><br></br><br></br>
 Product Price: <input type="text" onChange={handleChange} id="pPrice" /><br></br><br></br>
 <button onClick={add}>Add</button>
 <input type="text"  onChange={handleChange} id = "pSearch" />
 </div>
     {product.map(values=>
    {
        <div key={values.i}>
        <p>{values.prPrice}</p>
        </div>
           
    })}
</div>
);
}

export default Practice;

