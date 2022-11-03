import React, { useState } from 'react';

function ReactFormInput(props) {
        const{name,email}=props.contact

    return (
        <div>
            <div className='item'>  
    <div className='content'>
        
        <div className='Header'>Hi {name}</div>
        
        
    </div>
    
</div>
        </div>
    );
}

export default ReactFormInput;