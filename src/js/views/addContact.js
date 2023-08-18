import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/addContact.css";

const AddContact = () => {
    const { store, actions } = useContext(Context);

  

   
    return (
        <>
         
            <div className="addContactContainer">             
                <h1>Add a new contact</h1>
                <div className="contact-form">                    
                        <label>
                            Full Name:
                            <input
                             type="text"
                             name="name"
                             value={store.contacts.full_name}
                             placeholder="Full Name"></input>
                       </label>
                       <label>
                            Email:
                            <input
                             type="text"
                             name="email"
                             value={store.contacts.email}
                             placeholder="Enter email"></input>
                       </label>
                       <label>
                            Phone:
                            <input
                             type="text"
                             name="phone"
                             value={store.contacts.phone}
                             placeholder="Enter phone"></input>
                       </label>
                       <label>
                            Address:
                            <input
                             type="text"
                             name="address"
                             value={store.contacts.address}
                             placeholder="Enter address"></input>
                       </label>
                                              
                    
                </div>      
                <button onClick={() => actions.saveContact()}>Save</button>   
                                       
                
            </div>
             
        </>
         )    
};

export default AddContact;


/* <button>Cancel/Go Back</button> */ 

// deleteContact: (id) => {
//     const store
// }
// const revisedContactList = store.contacts.filter(contact => contact.id !== id);