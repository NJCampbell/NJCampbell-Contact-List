const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					full_name: "Jack Smith",
					email: "jsmith@aol.com",
					address: "2468 Whodoweappreciate Lane, Ocala, FL, 33333",
					phone: "(654) 987-4321",
					agenda_slug: "rickr"
				}
			]

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
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/njcamp_agenda")
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
			saveContact: () => {
				const store = getStore();
				let newContact = {
					full_name: "Jack Smith",
					email: "jsmith@aol.com",
					address: "2468 Whodoweappreciate Lane, Ocala, FL, 33333",
					phone: "(654) 987-4321",
					agenda_slug: "rickr"
				}
				getActions().addContact(newContact);
			},
			//add a new contact
			addContact: (aNewContact) => {
				const store = getStore();
				let revisedStore = [...store.contacts, aNewContact];
				getActions().fetchCreateOneContact(aNewContact);
				setStore({ contacts: revisedStore })
			},
			//update a contact 	NEED TO ADD 
			// handleChange(event) {
			// 	this.setState({ value: event.target.value });
			// },

			// handleSubmit(event) {
			// 	alert('Your favorite flavor is: ' + this.state.value);
			// 	event.preventDefault();
			// }
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