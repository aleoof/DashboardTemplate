import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../../api';
import { BsFillTrashFill, BsQrCode } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router';
import QRCodeScanner from '../../QRCodeScanner';
import axios from 'axios';

import './styles.css';

export default function OrdersForm() {
	const [formData, setFormData] = useState<{ [key: string]: any }>({});
	const [selectedKit, setSelectedKit] = useState('');
	const [listOfKits, setListOfKits] = useState<
		Array<{ id: number; quantity: string; description: string }>
	>([]);
	const [kits, setKits] = useState<
		Array<{ id: number; quantity: string; description: string }>
	>([]);
	const [kitAndQuantity, setKitAndQuantity] = useState<
		Array<{ kit_id: number; quantity: string }>
	>([]);
	const [openQR, setOpenQR] = useState(false);
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const [userLocation, setUserLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);

	const route = useNavigate();

	// define the function that finds the users geolocation
	const getUserLocation = () => {
		// if geolocation is supported by the users browser
		if (navigator.geolocation) {
			// get the current users location
			navigator.geolocation.getCurrentPosition(
				(position) => {
					// save the geolocation coordinates in two variables
					const { latitude, longitude } = position.coords;
					// update the value of userlocation variable
					setUserLocation({ latitude, longitude });
				},
				// if there was an error getting the users location
				(error) => {
					console.error('Error getting user location:', error);
				}
			);
		}
		// if geolocation is not supported by the users browser
		else {
			console.error('Geolocation is not supported by this browser.');
		}
	};

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
		getUserLocation();
		if (kits.length === 0) {
			getKits();
		}
		if (id && kits.length !== 0) {
			getOrder();
		}
	}, [kits]);

	function handleKitList() {
		const filteredKit = kits.filter((kit) => kit.id === parseInt(selectedKit));
		if (
			selectedKit &&
			listOfKits.every((kit) => kit.id !== parseInt(selectedKit))
		) {
			setListOfKits((prev) => [...prev, filteredKit[0]]);
			setSelectedKit('');
		}
	}

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

	const saveOrder = async (e: any) => {
		e.preventDefault();
		const {
			address,
			neighborhood,
			city,
			state,
			observations,
			// lat,
			// long,
			qr_code,
		} = formData;

		if (id) {
			await api.put(`order/${id}`, {
				address,
				neighborhood,
				city,
				state,
				observations,
				lat: `${userLocation?.latitude}`,
				long: `${userLocation?.longitude}`,
				qr_code,
				ordersKits: kitAndQuantity,
			});
		} else {
			const response = await api.post('order', {
				address,
				neighborhood,
				city,
				state,
				observations,
				lat: `${userLocation?.latitude}`,
				long: `${userLocation?.longitude}`,
				qr_code,
				ordersKits: kitAndQuantity,
			});
			const orderId = response.data.id;
			route(`?id=${orderId}`);
		}
	};

	useEffect(() => {
		if (formData.qr_code?.length > 0 && formData.qr_code?.length < 2) {
			getLocation();
		}
	}, [formData.qr_code]);

	const getLocation = async (value?: string) => {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation?.latitude},${userLocation?.longitude}&key=AIzaSyCLYeK1ksPfWhPxgZZ687Vdi-eDFLFRCr0`
		);
		const addressResult = response.data.results[0];
		setFormData((prev) => ({
			...prev,
			qr_code: value,
			address: `${addressResult.address_components[1].short_name} n.º:  ${addressResult.address_components[0].short_name}`,
			neighborhood: addressResult.address_components[2].short_name,
			city: addressResult.address_components[3].short_name,
			state: addressResult.address_components[4].short_name,
		}));
		// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
	};

	return (
		<div className="card list-height form-container p-3 pb-3 mb-5">
			<div className="card-body row">
				{openQR && (
					<QRCodeScanner
						closeQR={() => setOpenQR(!openQR)}
						handleValue={(value) => getLocation(value)}
					/>
				)}
				<form onSubmit={saveOrder}>
					<div className="row">
						<div className="mb-3 col-11">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Número da OS
							</label>
							<input
								type="text"
								className="form-control"
								id="qr_code"
								value={formData.qr_code}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										[e.target.id]: e.target.value,
									}))
								}
							/>
						</div>
						<button
							type="button"
							onClick={() => setOpenQR(!openQR)}
							className=" icons align-self-center"
							style={{ height: '40px', width: '40px', fontSize: '36px' }}
						>
							<BsQrCode />
						</button>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Endereço
							</label>
							<input
								type="text"
								className="form-control"
								id="address"
								value={formData.address}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										[e.target.id]: e.target.value,
									}))
								}
							/>
						</div>
						<div className="mb-3 col-5">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Bairro
							</label>
							<input
								type="text"
								className="form-control"
								id="neighborhood"
								value={formData.neighborhood}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										[e.target.id]: e.target.value,
									}))
								}
							/>
						</div>

						<div className="mb-3 col-5">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Município
							</label>
							<input
								type="text"
								className="form-control"
								id="city"
								value={formData.city}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										[e.target.id]: e.target.value,
									}))
								}
							/>
						</div>

						<div className="mb-3 col-2">
							<label htmlFor="exampleInputEmail1" className="form-label">
								UF
							</label>
							<input
								type="text"
								className="form-control"
								id="state"
								value={formData.state}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										[e.target.id]: e.target.value,
									}))
								}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								OBS:
							</label>
							<textarea
								className="form-control"
								id="observations"
								value={formData.observations}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										[e.target.id]: e.target.value,
									}))
								}
							/>
						</div>
						<div className="mb-3 d-flex justify-content-between align-items-end gap-5">
							<span className="flex-fill">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Kits
								</label>
								<select
									className="form-select"
									aria-label="Default select example"
									id="kit"
									onChange={(e) => setSelectedKit(e.target.value)}
								>
									<option value={''} selected disabled>
										Selecione o(s) Kit(s)
									</option>
									{kits.map((kit) => (
										<option value={kit.id}>{kit.description}</option>
									))}
								</select>
							</span>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									handleKitList();
								}}
							>
								+
							</button>
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
														Quantidade
													</label>
													<input
														value={
															kitAndQuantity.some((kq) => kq.kit_id === kit.id)
																? kitAndQuantity.filter(
																		(k) => k.kit_id === kit.id
																  )[0].quantity
																: ''
														}
														type="text"
														className="form-control"
														onChange={(e) => handleKitQuantity(e, `${kit.id}`)}
													/>
												</span>
												<button className="btn btn-primary" onClick={() => {}}>
													<BsFillTrashFill />
												</button>
											</div>
										</div>
									</div>
								))}
							</>
						)}
						<button type="submit" className="btn btn-primary">
							Salvar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
