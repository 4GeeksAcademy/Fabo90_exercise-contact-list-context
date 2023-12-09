const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			contact: {}
		},
		actions: {
			getApiData: information => {
				const store = getStore();

				setStore({ contacts: information });
			},
			postApi: async (name, email, phone, address) => {
				let newContact = {
					full_name: name,
					email: email,
					agenda_slug: "fabian",
					address: address,
					phone: phone
				};
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact)
					});
					const json = await response.json();

					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					console.log(json);
					const store = getStore();
					store.contacts.push(newContact);
					setStore({ contacts: store.contacts });
				} catch (error) {
					console.log(error);
				}
			},
			deleteApi: async id => {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					const json = await response.json();

					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					console.log(json);
					const store = getStore();
					/* store.contacts.filter((i, ind) => {
						id[ind] != i;
					});
					setStore({ contacts: store.contacts }); */
					/* setList(list.filter((i, ind) => index != ind))} */
				} catch (error) {
					console.log(error);
				}
			},
			updateApi: (name, email, phone, address, id) => {
				let contact = {
					full_name: name,
					email: email,
					agenda_slug: "fabian",
					address: address,
					phone: phone
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error)); //
			},

			getIndividualContact: id => {
				console.log(id);
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id)
					.then(response => response.json())
					/* .then(data => setStore({ contact: data })) */
					.then(data => console.log(data));
			}
		}
	};
};

export default getState;
