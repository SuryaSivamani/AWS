import React, { useEffect, useState } from 'react';

function MultipleFunc(props) {
    
    
     function TopRender()
     {
        const Top= "Top Rendered"
        console.log(Top)
     }

     function MiddleRender()
     {
        const Middle = "Middle Rendered"
        console.log(Middle)
     }

     function BottomRender()
     {
        const Bottom= "Bottom Rendered"
        console.log(Bottom)
     }

     useEffect (()=>{
        TopRender();
        MiddleRender();
        BottomRender();
     })

    return (
        <div>
            <h2>Multiple Function</h2>
        </div>
    );
}

export default MultipleFunc;