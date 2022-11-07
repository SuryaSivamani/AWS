import React from 'react';

function ProductSearch({product}) {
    console.log(product)

    return (
        <div>
            <div className='container'>
                <div>
                    <br></br>
                    <br></br>
                <input type="text" name="search" placeholder="Search..."
                />
               
                </div>
                
                {product.map(values=>{
            return <div key={values.id}>
                    {values.proId}
            </div>
        })}

        </div>
        </div>
    );
}

export default ProductSearch;