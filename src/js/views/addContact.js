import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
const AddContact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.createOneContact();
    }, [])
    return (
        <>
            {/* <div className="contact-form">
                {store.contacts(() => {
                    return (
                        <div className="contact-input-list">
                            <h1>Add Additional Contacts</h1>
                            <input type="text"
                                placeholder="name"
                                value={contact.name}></input>

                            <button onClick={() => { createOneContact() }}>Submit</button>
                        </div>

                    );
                })};



            </div> */}

        </>
    );
};

export default AddContact;

/* <button>Cancel/Go Back</button> */ 

// deleteContact: (id) => {
//     const store
// }
// const revisedContactList = store.contacts.filter(contact => contact.id !== id);