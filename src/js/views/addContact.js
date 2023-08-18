import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = ({ fetchCreateOneContact }) => {
    const { store, actions } = useContext(Context);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
            <div className="addContactContainer">
                <h1>Add a new contact</h1>
                <div className="contact-form">
                    <label>
                        Full Name:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Enter full name"></input>
                    </label>
                    <label>
                        Email:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"></input>
                    </label>
                    <label>
                        Phone:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter phone"></input>
                    </label>
                    <label>
                        Address:
                        <br />
                        <input
                            type="text"
                            className="inputField"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter address"></input>
                    </label>

                </div>
                <button className="btn btn-primary btn-lg" id="saveButton" onClick={() => actions.fetchCreateOneContact(fullName, email, phone, address)}>Save</button>
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Go to back to Contacts</span>
                </Link>
            </div>
        </>
    )
};

export default AddContact;