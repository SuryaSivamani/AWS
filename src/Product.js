import React, { useState } from 'react';
//import ProductSearch from './ProductSearch';

function Product(props) {
    const[prodId,setProdId] = useState("")
    const[prodName,setProdName] = useState("")
    const[prodDesc,setProdDesc] = useState("")
    const[prodPrice,setProdPrice] = useState("")
    const[prodSearch,setProdSearch] = useState("")

    const[product,setProduct]=useState([])
    const add=((e)=>{
        e.preventDefault();
        if(prodId === "" || prodName === "" || prodDesc ==="" || prodPrice ==="")
        {
            alert("Enter the value")
            return
        }
        setProduct([...product,
        {
            id:product.length,
            prodId:prodId,
            prodName:prodName,
            prodDesc:prodDesc,
            prodPrice:prodPrice,
            
        }])
        
        setProdId("")
        setProdName("")
        setProdDesc("")
        setProdPrice("")

    })

    const productSearchFilter = product.filter(prod => {
        return (prod.prodName === prodSearch || prod.prodId === prodSearch || prod.prodPrice === prodSearch)
    }) 
    console.log(productSearchFilter)

    return (
        <div>
              <div className='container'>
                <h2>Product Details</h2>
                <form className='form' onSubmit={add}>
                    <div className='field'>
                    <label>Product ID : </label>
                    <input type="number" placeholder='Enter the Product ID ' name="number" 
                    value= {prodId} 
                    onChange={(e)=> setProdId(e.target.value)}></input>
                    </div>
                    <div className='field'>
                    <label>Product Name : </label>
                    <select value={prodName} onChange={(e)=> setProdName(e.target.value)}>
                    <option >
                       Select your product
                             </option>
                        <option value="Apple">Apple</option>
                        <option value="Huawei">Huawei</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Motorola">Motorola</option>
                    </select>
                    </div>
                   

                    <div className='field'>
                    <label>Product Description : </label>
                    <input type="text" name="Product_Description"
                    value={prodDesc}
                    onChange={(e)=> setProdDesc(e.target.value)}></input>
                    </div>

                    <div className='field'>
                    <label>Product Price : </label>
                    <input type="number" 
                     
                         min="0" 
                     step=".01"  name="Product_Price" placeholder='Enter the Price'
                    value={prodPrice}
                    onChange={(e)=> setProdPrice(e.target.value)}></input>
                    </div>

                    <button className='btn'>Add
                        </button>       
                     </form>
                     <br>
                        </br>
                        <br></br>
                     <div>
                        <div>
                        <input type="text" name="search" placeholder="Search..." value={prodSearch} onChange={(e)=>setProdSearch(e.target.value)}/>
                        <br>
                        </br>
                        <br>
                        </br></div>
                        {productSearchFilter.map(val=>{
                            return(
                                <div>
                                <div key={val.id}>
                                    <table>
                                        <tr>
                                            <th>Product ID:</th>
                                            <th>Product Name:</th>
                                            <th>Product Desc:</th>
                                            <th>Product Price:</th>
                                        </tr>
                                        <tr>
                                        <td>{val.prodId}</td>
                                            <td>{val.prodName}</td>
                                            <td>{val.prodDesc}</td>
                                            <td>{val.prodPrice}</td>
                                        </tr>
                                        
                                    </table>
                                    </div>
                                    </div>
                            )
                        })}
                     </div>
        </div>
        </div>
    );
}

export default Product;