import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchAllContacts();
    }, [])

    return (
        <>
            <ul className="list-group">
                {store.contacts.map((contact) => {
                    return (
                        <li
                            key={contact.id}

                        >
                            <p> {contact.full_name} </p>
                            <p> {contact.address} </p>
                            <p> {contact.phone} </p>
                        </li>
                    );
                })}
            </ul>

        </>
    );
};

export default Contact;