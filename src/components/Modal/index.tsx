import useModalStore from '../../stores/modalStore';

export default function Modal() {
	const { modal, openModal, closeModal } = useModalStore((state) => state);

	return (
		<>
			<button className="btn btn-primary" onClick={openModal}>
				Open Modal
			</button>

			{/* Modal */}
			<div
				className={`modal fade ${modal.open ? 'show' : ''}`}
				tabIndex={-1}
				style={{ display: modal.open ? 'block' : 'none' }}
				aria-hidden={!modal.open}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal Title</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								onClick={closeModal}
							></button>
						</div>
						<div className="modal-body">
							<p>This is the content of the modal!</p>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={closeModal}
							>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={closeModal}
							>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
