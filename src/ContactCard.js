import React from "react";
import user from "./images/icons-hero.png";

const ContactCard = (props) =>{
    const {id,name,email} = props.contact;
return(
    
    <div className='item'>  
    <div className='content'>
        
        <div className='Header'>{name}</div>
        
        <div>{email}</div>
    </div>
    <img classname="boot" src={user} alt="user" />
</div>
)
}

export default ContactCard;