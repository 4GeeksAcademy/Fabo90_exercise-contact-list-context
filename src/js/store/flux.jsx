const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [
				{ nombre: "fabian", telefono: 12544, direccion: "cra 123", email: "fafa@adfa.com" },
				{ nombre: "Nicolas", telefono: 12544, direccion: "calle 123", email: "adfadf@.com" }
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
