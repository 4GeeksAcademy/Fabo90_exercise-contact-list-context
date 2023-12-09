import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import { ContactCard } from "../component/ContactCard.jsx";
import { Modal } from "../component/Modal.jsx";
import { EditModal } from "../component/EditModal.jsx";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});
	const [modalState, setModalState] = useState({
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
						{store.contacts.map((contact, index) => (
							<ContactCard
								onDelete={() => setState({ showModal: true, id: contact.id })}
								key={index}
								name={contact.full_name}
								phone={contact.phone}
								address={contact.address}
								email={contact.email}
								onEdit={() => setModalState({ showModal: true })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			<EditModal show={modalState.showModal} onClose={() => setModalState({ showModal: false })} />
		</div>
	);
};
