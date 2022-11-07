import React, { useState } from 'react';

function ReactFormInput({val}) {
       console.log(val)

    return (

        <div>
            <div className='item'>  
    <div className='content'>
        {val.map(values=>{
            return <div
                    key={values.id}>
                    {values.name}
            </div>
        })}
       
        
        
    </div>
    
</div>
        </div>
    );
}

export default ReactFormInput;