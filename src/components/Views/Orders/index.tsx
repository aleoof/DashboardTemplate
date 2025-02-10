import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../../api';
import { BsFillTrashFill, BsQrCode } from 'react-icons/bs';
import { useSearchParams } from 'react-router';
import QRCodeScanner from '../../QRCodeScanner';

export default function OrdersView() {
	const [formData, setFormData] = useState<{ [key: string]: any }>({});
	const [listOfKits, setListOfKits] = useState<
		Array<{ id: number; quantity: string; description: string }>
	>([]);
	const [kits, setKits] = useState<
		Array<{ id: number; quantity: string; description: string }>
	>([]);
	const [kitAndQuantity, setKitAndQuantity] = useState<
		Array<{ kit_id: number; quantity: string }>
	>([]);
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const getKits = async () => {
		const response = await api.get('kits');
		setKits(response.data);
	};

	const getOrder = async () => {
		const response = await api.get(`/order/${id}`);
		response.data.ordersKits.map((ok: { kit_id: number; quantity: string }) => {
			const kitInfo = kits.filter((kit) => kit.id === ok.kit_id);
			setListOfKits((prev) => [...prev, kitInfo[0]]);
		});
		setKitAndQuantity(response.data.ordersKits);
		setFormData(response.data);
	};

	useEffect(() => {
		if (kits.length === 0) {
			getKits();
		}
		if (id && kits.length !== 0) {
			getOrder();
		}
	}, [kits]);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const handleKitQuantity = (e: ChangeEvent<HTMLInputElement>, id: string) => {
		const value: string = e.target.value;
		if (!kitAndQuantity.some((item) => item.kit_id === parseInt(id))) {
			setKitAndQuantity((prev) => [
				...prev,
				{ kit_id: parseInt(id), quantity: value },
			]);
		} else {
			setKitAndQuantity((prev) =>
				prev.map((p) => {
					if (p.kit_id === parseInt(id)) {
						return { ...p, quantity: value };
					} else return p;
				})
			);
		}
	};

	return (
		<div className="card list-height overflow-y-auto p-3 pb-3 mb-5">
			<div className="card-body row">

					<div className="row">
						<h1>Ordem de Serviço</h1>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Número:{formData.qr_code}
							</label>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Endereço: {formData.address}
							</label>
						</div>
						<div className="mb-3 col-5">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Bairro: {formData.neighborhood}
							</label>
						</div>

						<div className="mb-3 col-5">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Município: {formData.city}
							</label>
						</div>

						<div className="mb-3 col-2">
							<label htmlFor="exampleInputEmail1" className="form-label">
								UF: {formData.state}
							</label>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								OBS: {formData.observations}
							</label>

						</div>

						{listOfKits.length > 0 && (
							<>
								{listOfKits.map((kit) => (
									<div className="mb-3 mt-3">
										<div className="d-flex justify-content-between align-items-end">
											<div>{kit.description}</div>
											<div className="d-flex align-items-end gap-5">
												<span>
													<label
														htmlFor="exampleInputEmail1"
														className="form-label"
													>
														{
														kitAndQuantity.some((kq) => kq.kit_id === kit.id)
															? kitAndQuantity.filter(
																(k) => k.kit_id === kit.id
															)[0].quantity
															: ''
														}
													</label>

												</span>
											</div>
										</div>
									</div>
								))}
							</>
						)}

					</div>
			</div>
		</div>
	);
}
