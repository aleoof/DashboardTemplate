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
import { ptBR } from 'date-fns/locale';

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
			registerDay: Date;
		}>
	>([]);
	const [deleteId, setDeleteId] = useState<unknown>(null);
	const [date, setDate] = useState<{ start: Date; end: Date }>({
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
			`report?start=${format(date.start, 'yyyy-MM-dd', {
				locale: ptBR,
			})}&end=${format(date.end, 'yyyy-MM-dd', { locale: ptBR })}`
		);
	};
	useEffect(() => {
		getOrders();
	}, []);

	const deleteItem = async (delItem: unknown) => {
		await api.delete(`/order/${delItem}`);
		getOrders();
		closeModal();
	};

	const duplicateItem = async (itemId: unknown) => {
		await api.post(`/order/duplicate/${itemId}`);
		getOrders();
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
							dateFormat="dd/MM/yyyy"
							selected={date.start}
							onSelect={(value) =>
								setDate((prev) => ({
									...prev,
									start: value ? value : new Date(),
								}))
							} //when day is clicked
						/>
					</div>
					<div className="d-flex flex-column ">
						<label className="form-label">Fim do período</label>
						<DatePicker
							className="form-control"
							selected={date.end}
							dateFormat="dd/MM/yyyy"
							onSelect={(value) =>
								setDate((prev) => ({
									...prev,
									end: value ? value : new Date(),
								}))
							} //when day is clicked
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
				<div className="card list-height overflow-y-auto pb-0 mb-5">
					<div className="card-header">
						<p className="card-title">Lista de OS</p>
					</div>
					<table className="w-100">
						<thead>
						<tr>
							<th className="text-start">Numero OS</th>
							<th>Data</th>
							<th>Hora</th>
							<th className="text-start">Usuário</th>
							<th className="text-start">Endereço</th>
							<th className="text-start">Bairro</th>
							<th className="text-start">Cidade/UF</th>
							<th>Status</th>
							<th>Ações</th>
						</tr>
						</thead>
						<tbody>
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
									date={order.registerDay}
									deleteListItem={() => {
										setDeleteId(order.id);
										openModal();
									}}
									duplicateItem={() => duplicateItem(order.id)}
								/>
								<hr />
							</>
						))}
						</tbody>
					</table>
				</div>
			</div>

			<div>
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
