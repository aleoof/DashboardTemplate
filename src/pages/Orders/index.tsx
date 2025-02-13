import { BsFillPlusSquareFill } from 'react-icons/bs';
import ListItemOrders from '../../components/ListItem/Orders';
import './styles.css';

import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import Modal from '../../components/Modal';
import useModalStore from '../../stores/modalStore';

export default function Orders() {
	const { openModal, closeModal } = useModalStore((state) => state);
	const [orders, setOrders] = useState<
		Array<{ id: number; qr_code: string; address: string }>
	>([]);
	const [deleteId, setDeleteId] = useState<unknown>(null);

	const getOrders = async () => {
		const response = await api.get('orders');
		setOrders(response.data);
	};
	useEffect(() => {
		getOrders();
	}, []);

	const deleteItem = async (delItem: unknown) => {
		console.log(deleteId);
		await api.delete(`/order/${delItem}`);
		closeModal();
	};

	useEffect(() => {
		console.log(deleteId);
	}, [deleteId]);

	return (
		<>
			<div>
				<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
					<NavLink to="form" className="btn">
						<BsFillPlusSquareFill /> Novo
					</NavLink>
				</div>

				<div className="card list-height overflow-y-auto p-3 pb-0 mb-5">
					<div className="card-body">
						{orders.map((order) => (
							<>
								<ListItemOrders
									key={order.id}
									qrcode={order.qr_code}
									id={order.id}
									address={order.address}
									deleteListItem={() => {
										setDeleteId(order.id);
										openModal();
									}}
								/>
								<hr />
							</>
						))}
					</div>
				</div>
				<Modal
					cancelCopy="Cancelar"
					copy="Deseja remover o item selecionado ?"
					saveCopy="Apagar"
					toggleCancel={closeModal}
					toggleSave={() => deleteItem(deleteId)}
				/>
			</div>
		</>
	);
}
