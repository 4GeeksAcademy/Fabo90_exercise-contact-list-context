const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
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
				} catch (error) {
					console.log(error);
				}
			},
			deleteApi: async id => {
				let deleteContact = {
					id: id
				};
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
				} catch (error) {
					console.log(error);
				}
			},
			updateApi: async (name, email, phone, address, id) => {
				let newContact = {
					full_name: name,
					email: email,
					agenda_slug: "fabian",
					address: address,
					phone: phone
				};
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "PUT",
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
				} catch (error) {
					console.log(error);
				}
			},
			getApi: async function() {
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/fabian");
					const json = await response.json();

					if (!response.ok) {
						console.log(response.statusText);
						return;
					}

					setStore({ contacts: json });
				} catch (error) {
					console.log(error);
				}
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
