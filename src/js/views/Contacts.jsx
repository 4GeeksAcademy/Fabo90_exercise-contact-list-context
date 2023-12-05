import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import { ContactCard } from "../component/ContactCard.jsx";
import { Modal } from "../component/Modal.jsx";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{/* 	<ContactCard onDelete={() => setState({ showModal: true })} />
						<ContactCard /> */}
						{store.contacts.map((contact, index) => (
							<ContactCard
								onDelete={() => setState({ showModal: true })}
								key={index}
								name={contact.nombre}
								phone={contact.telefono}
								address={contact.direccion}
								email={contact.email}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
