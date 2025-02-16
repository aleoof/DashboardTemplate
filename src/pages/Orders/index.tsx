import { BsFillPlusSquareFill, BsPencilSquare } from 'react-icons/bs';
import ListItemOrders from '../../components/ListItem/Orders';
import './styles.css';

import { NavLink, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import Modal from '../../components/Modal';
import useModalStore from '../../stores/modalStore';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

export default function Orders() {
	const { openModal, closeModal } = useModalStore((state) => state);
	const [orders, setOrders] = useState<
		Array<{
			id: number;
			qr_code: string;
			address: string;
			city: string;
			neighborhood: string;
			state: string;
		}>
	>([]);
	const [deleteId, setDeleteId] = useState<unknown>(null);
	const [date, setDate] = useState<{ start: Date | null; end: Date | null }>({
		start: new Date(),
		end: new Date(),
	});
	const route = useNavigate();

	useEffect(() => {
		const newDate = format(date.start, 'yyyy-MM-dd');
		console.log(newDate);
	}, [date]);
	const getOrders = async () => {
		const response = await api.get('orders');
		setOrders(response.data);
	};

	const toReportPage = () => {
		route(
			`report?start=${format(date.start, 'yyyy-MM-dd')}&end=${format(
				date.end,
				'yyyy-MM-dd'
			)}`
		);
	};
	useEffect(() => {
		getOrders();
	}, []);

	const deleteItem = async (delItem: unknown) => {
		console.log(deleteId);
		await api.delete(`/order/${delItem}`);
		getOrders();
		closeModal();
	};

	return (
		<>
			<div>
				<div className="d-flex p-2 pt-0 justify-content-end align-items-end gap-3">
					<div className=" d-flex flex-column ">
						<label className="form-label">Inicio do período</label>
						<DatePicker
							className="form-control"
							locale="pt-BR"
							selected={date.start}
							onSelect={(value) =>
								setDate((prev) => ({ ...prev, start: value }))
							} //when day is clicked
						/>
					</div>
					<div className="d-flex flex-column ">
						<label className="form-label">Fim do período</label>
						<DatePicker
							className="form-control"
							selected={date.end}
							onSelect={(value) => setDate((prev) => ({ ...prev, end: value }))} //when day is clicked
						/>
					</div>

					<a
						onClick={toReportPage}
						className="btn"
						style={{ height: 'fit-content' }}
					>
						<BsPencilSquare /> Relatório
					</a>
					<NavLink to="form" className="btn" style={{ height: 'fit-content' }}>
						<BsFillPlusSquareFill /> Novo
					</NavLink>
				</div>

				<div className="card list-height overflow-y-auto p-md-3 pb-0 mb-5">
					<div className="card-body">
						{orders.map((order) => (
							<>
								<ListItemOrders
									key={order.id}
									qrcode={order.qr_code}
									id={order.id}
									address={order.address}
									city={order.city}
									neighborhood={order.neighborhood}
									state={order.state}
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
