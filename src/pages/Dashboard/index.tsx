import {BsClipboardDataFill, BsPersonBadgeFill, BsTools} from "react-icons/bs";
// import ListItemUsersLog from "../../components/ListItem/UsersLog";

import { useEffect, useState } from 'react';
import { api } from '../../api';
import ListItemOrdersDash from "../../components/ListItem/OrdersDash";

export default function Dashboard() {

	const [orders, setOrders] = useState<
		Array<{ id: number; qr_code: string; address: string; registerDay: string }>
	>([]);


	const getOrders = async () => {
		const response = await api.get('orders');
		setOrders(response.data);
	};
	useEffect(() => {
		getOrders();
	}, []);

	return (
		<div>
			<div className="row d-flex pt-3">
				<div className="col-12 col-md-3 mt-4">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">teste Ordens de Serviço</p>
								<h3 className="fw-bold">55<span className="card-text"> Hoje</span></h3>
							</div>
							<div className="icons"><BsClipboardDataFill /></div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 mt-4 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Ordens de Serviço</p>
								<h3 className="fw-bold">445<span className="card-text"> Total</span></h3>
							</div>
							<div className="icons"><BsClipboardDataFill /></div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 mt-4  d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Kits Cadastrados</p>
								<h3 className="fw-bold">12<span className="card-text"> Total</span></h3>
							</div>
							<div className="icons"><BsTools /></div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 mt-4 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Usuários</p>
								<h3 className="fw-bold">12<span className="card-text"> Total</span></h3>
							</div>
							<div className="icons"><BsPersonBadgeFill /></div>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-8 mt-4 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<p className="card-title">Atendimentos realizado hoje</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4 mt-4  d-none d-md-block">
						<div className="card">
							<div className="card-body bg-info">
								<p className="card-title mb-5">Aviso Importante</p>
								<h4 className="fw-bold">Sistema em desenvolvimento</h4>
								<h4 className="fw-bold mb-5">Aguarde lançamento</h4>

								<a className="mt-5 text-white" href="/version">Saiba Mais</a>
							</div>
					</div>
				</div>

				<div className="col-12 col-md-6 mt-4">
					<div className="card">
						<div className="card-body">
							<p className="card-title">OS do dia</p>
							{orders.map((order) => (
								<>
									<ListItemOrdersDash
										key={order.id}
										qrcode={order.qr_code}
										register={order.registerDay}
										id={order.id}
										address={order.address}
									/>
									<hr />
								</>
							))}

						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 mt-4  d-none d-sm-none d-md-block">
					<div className="card">
						<div className="card-body">
							<p className="card-title">Ultimos Acessos</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
