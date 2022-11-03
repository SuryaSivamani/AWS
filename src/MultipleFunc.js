import React, { useEffect } from 'react';

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
     },[])

    return (
            <div>
            <h2>Multiple Function</h2>
            </div>
)        
        } export default MultipleFunc;

// // import { useEffect } from 'react';
 
// //  const MultipleFunc = () => {
// //     const name = "Thomas"
 
// // const printName = (value) => {
// //     console.log(value);
// //  };
 
 
// //     useEffect(() => {
// //         printName(name);
// //     }, [name, printName]);
 
// //     return <p>UseEffect!</p>;
// //  };
 
// //  export default MultipleFunc;


// import { useState } from 'react';

// export default function MultipleFunc() {
// //   const [name, setName] = useState('');
// //    const[email,setEmail] = useState('');
//   const [updated, setUpdated] = useState({
//    name:"",
//    email:""
//   });

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleChangeEmail = (event) => {
//    setEmail(event.target.value);
//  };
//   const handleClick = () => {
//     //  "message" stores input field value
//     setUpdated(name,email);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         onChange={handleChange}
//         value={updated.name}
//       />
//       <input
//         type="text"
//         id="email"
//         name="email"
//         onChange={handleChangeEmail}
//         value={updated.email}
//       />

//       <h2>Message: {name}</h2>

//       <h2>Updated: {updated}</h2>

//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }
