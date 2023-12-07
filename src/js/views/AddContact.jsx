import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [inputName, setInputName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPhone, setInputPhone] = useState("");
	const [inputAddress, setInputAddress] = useState("");
	function save() {
		actions.postApi(inputName, inputEmail, inputPhone, inputAddress);
		setInputName("");
		setInputEmail("");
		setInputPhone("");
		setInputAddress("");
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setInputName(e.target.value)}
							value={inputName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => setInputEmail(e.target.value)}
							value={inputEmail}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setInputPhone(e.target.value)}
							value={inputPhone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => setInputAddress(e.target.value)}
							value={inputAddress}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={save}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
