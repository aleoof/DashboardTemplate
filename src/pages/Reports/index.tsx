import { useEffect, useRef, useState } from 'react';
import { api } from '../../api';
import { useSearchParams } from 'react-router';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import './styles.css';
import { useReactToPrint } from 'react-to-print';
import { BsFileEarmarkPdf } from 'react-icons/bs';

export default function Report() {
	const [searchParams] = useSearchParams();
	const start = searchParams.get('start');
	const end = searchParams.get('end');
	const [currentDate, setCurrentDate] = useState(new Date());
	const [orders, setOrders] = useState<
		Array<{
			order: {
				active: boolean;
				address: string;
				city: string;
				id: number;
				lat: string;
				long: string;
				neighborhood: string;
				observations: string;
				qr_code: string;
				registerDay: string;
				state: string;
			};
			ordersKits: {
				kit_id: number;
				quantity: string;
				kit: { description: string };
			}[];
		}>
	>([]);
	const contentRef = useRef<HTMLDivElement>(null);
	const reactToPrintFn = useReactToPrint({ contentRef });

	const formatDate = (date: string | number | Date, hasTime?: boolean) => {
		if (!hasTime) {
			return format(date, 'dd/MM/yy', { locale: ptBR });
		}
		return format(date, 'dd/MM/yy hh:mm', { locale: ptBR });
	};

	const getOrders = async () => {
		const response = await api.get(`/orders/report?start=${start}&end=${end}`);
		setOrders(response.data);
		console.log(response.data);
	};

	useEffect(() => {
		getOrders();
	}, []);

	return (
		<>
			<div className="d-flex p-2 pt-0 justify-content-end gap-3">
				<button type="button" onClick={() => reactToPrintFn()} className="btn">
					<BsFileEarmarkPdf /> Baixar PDF
				</button>
			</div>
			<div className="card ">
				<div ref={contentRef} className="p-5">
					<div className="d-flex gap-4 mb-4">
						<img
							alt="logo da prefeitura"
							src="/src/assets/prefeitura_logo.png"
							height={70}
							width={50}
						/>
						<span className="flex-fill text-center">
							<h2 className="mb-3 fw-bolder">Serviços Realizados</h2>
							<p>
								Data de: {formatDate(start || '')} Data Até:{' '}
								{formatDate(end || '')}
							</p>
						</span>
						<p>{`${formatDate(currentDate, true)}`}</p>
					</div>
					<div>
						<table className="table table-striped">
							<tr>
								<th scope="col">ID</th>
								<th scope="col">Nº da OS</th>
								<th scope="col">Latitude</th>
								<th scope="col">Longitude</th>
								<th scope="col">Endereço</th>
								<th scope="col">Bairro</th>
								<th scope="col">Cidade</th>
								<th scope="col">Estado</th>
							</tr>
							{orders.map((order) => (
								<>
									<tr className="row-os">
										<td>{order.order.id}</td>
										<td>{order.order.qr_code}</td>
										<td>{order.order.lat}</td>
										<td>{order.order.long}</td>
										<td>{order.order.address}</td>
										<td>{order.order.neighborhood}</td>
										<td>{order.order.city}</td>
										<td>{order.order.state}</td>
									</tr>
									{order.ordersKits.length > 0 && (
										<tr>
											<td className="kit-table" colSpan={4}>
												<table className="table kit-table w-100 row-kits">
													<tr>
														<th>Kits</th>
														<th>Quantidade</th>
														<th>Descrição</th>
													</tr>
													{order.ordersKits.map((kit) => (
														<tr>
															<td>-</td>
															<td>{kit.quantity}</td>
															<td>{kit.kit.description}</td>
														</tr>
													))}
												</table>
											</td>
										</tr>
									)}
								</>
							))}
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
