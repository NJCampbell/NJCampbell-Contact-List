import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
const AddContact = () => {
    const { store, actions } = useContext(Context);

   
    return (
        <>
         {store.contacts.map((contacts) => {
            <div className="add-contact-container">             
                <h1>Add a new contact</h1>
                <div className="contact-form">
                    
                        <input
                        type="text"
                        value={store.contacts.full_name}
                        placeholder="Full Name">Full Name</input>
                        <input
                        type="text"
                        placeholder="Enter email">Email</input>
                        <input
                        type="text"
                        placeholder="Enter phone">Phone</input>
                        <input
                        type="text"
                        placeholder="Enter address">Address</input>
                        
                    
                </div>                                
                
            </div>
         })}         
        </>
         )    
};

export default AddContact;

/* <button>Cancel/Go Back</button> */ 

// deleteContact: (id) => {
//     const store
// }
// const revisedContactList = store.contacts.filter(contact => contact.id !== id);