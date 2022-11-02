import React, { useState } from 'react';
import ContactCard from './ContactCard';

function FavColor(props) {
    console.log(props);
    const listTheContacts = props.contacts.map((contact) =>
    {
        return (
          <ContactCard contact={contact}/>
        )
    })
    const[color,setColor] = useState('')
    return (
        
        <div>
            <h2 style={{backgroundColor:{color}}}>Favorite Color is {color}:</h2>
            <button onClick={(e)=>{
                console.log(e)
                setColor(e.target.innerHTML)
            }}>Red</button>
            <button onClick={(e)=>{
                setColor(e.target.innerHTML)
            }}>Blue</button>
             <button onClick={(e)=>{
                setColor(e.target.innerHTML)
            }}>Purple</button>
             <button onClick={(e)=>{
                setColor(e.target.innerHTML)
            }}>Lavender</button>
            {listTheContacts}
        </div>
    );
}

export default FavColor;