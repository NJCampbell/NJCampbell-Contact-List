const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			//fetch all contacts from one agenda
			fetchAllContacts: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/njcamp")
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ contacts: data })
					})
			},

			// delete one contact
			fetchDeleteOneContact: id => {
				let options = {
					method: 'DELETE',
					body: JSON.stringify(id),
					headers: { 'Content-type': 'application/json' }
				}
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, options)
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response;
					})
					.then(() => console.log("Successfully deleted"))
			},
			deleteContact: id => {
				const store = getStore();
				let revisedContactList = store.contacts.filter(contact => contact.id !== id);
				getActions().fetchDeleteOneContact(id);
				setStore({ contacts: revisedContactList });
			},

			//save contact
			fetchUpdateOneContact: (newContact) => {
				let options = {
					method: 'POST',
					body: JSON.stringify(newContact),
					headers: { 'Content-type': 'application/json' }
				}
				fetch("https://playground.4geeks.com/apis/fake/contact/", options)
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response;
					})
					.then(() => console.log("Successfully added one contact"))
			},

			//add a new contact
			fetchCreateOneContact: (full_name, email, phone, address) => {
				let options = {
					method: 'POST',
					body: JSON.stringify({ full_name: full_name, email: email, phone: phone, address: address, agenda_slug: "njcamp" }),
					headers: { 'Content-type': 'application/json' }
				}
				fetch("https://playground.4geeks.com/apis/fake/contact/", options)
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						getActions().fetchAllContacts();
						const store = getStore();
						let revisedStore = [...store.contacts, response];
						setStore({ contacts: revisedStore })
						return response;
					})
					.then(() => console.log("Successfully added one contact"))
					.catch(
						error => console.error("Did not work", error)
					)
			},
		}
	}
}
export default getState;

// from boilerplate, don't need but for reference
// changeColor: (index, color) => {
// 	//get the store
// 	const store = getStore();

// 	//we have to loop the entire demo array to look for the respective index
// 	//and change its color
// 	const demo = store.contacts.map((elm, i) => {
// 		if (i === index) elm.background = color;
// 		return elm;
// 	});

// 	//reset the global store
// 	setStore({ demo: demo });
// },
	// saveContact: (full_name, email, phone, address) => {
			// 	const store = getStore();
			// 	let revisedStore = [...store.contacts, newContact];
			// 	let newContact = {
			// 		full_name: full_name,
			// 		email: email,
			// 		address: address,
			// 		phone: phone,
			// 		agenda_slug: "njcamp",

			// 	}
			// 	getActions().addContact(newContact);

			// 	setStore({ contacts: revisedStore })
			// 	// handleSubmit();
			// },