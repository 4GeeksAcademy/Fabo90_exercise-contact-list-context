import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const EditModal = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">EDIT CONTACT</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									/* onChange={e => setInputName(e.target.value)}
									value={inputName} */
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									/* onChange={e => setInputEmail(e.target.value)}
									value={inputEmail} */
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									placeholder="Enter phone"
									/* onChange={e => setInputPhone(e.target.value)}
									value={inputPhone} */
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter address"
									/* onChange={e => setInputAddress(e.target.value)}
									value={inputAddress} */
								/>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => props.onClose()}>
							Cancel
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							/* onClick={() => actions.deleteApi(props.id)} */
						>
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

EditModal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
EditModal.defaultProps = {
	show: false,
	onClose: null
};
