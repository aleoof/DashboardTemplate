import {
	BsClipboardDataFill,
	BsPersonBadgeFill,
	BsTools,
} from 'react-icons/bs';
import ListItemOrdersDash from '../../components/ListItem/OrdersDash';
import { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { api } from '../../api';
import {
	GoogleMap,
	Marker,
	// MarkerF,
	useJsApiLoader,
} from '@react-google-maps/api';
import axios from 'axios';
import './styles.css';

const containerStyle = {
	width: '100%',
	height: '400px',
};

const center = {
	lat: -25.315827,
	lng: -49.287565,
};

export default function Dashboard() {
	const [orders, setOrders] = useState<
		Array<{
			order: {
				status: number;
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
				state: number;
			};
			ordersKits: {
				kit_id: number;
				quantity: string;
				kit: { description: string };
			}[];
		}>
	>([]);

	const [totalItems, setTotalItems] = useState<{
		dayOrder: number;
		order: number;
		user: number;
		kit: number;
	}>({
		dayOrder: 0,
		order: 0,
		user: 0,
		kit: 0,
	});

	const getOrders = async () => {
		const today = new Date();
		const formattedDate = format(today, 'yyyy-MM-dd');
		const response = await api.get(
			`/orders/report?start=${formattedDate}&end=${formattedDate}`
		);
		setOrders(response.data);
		setTotalItems((prev) => ({ ...prev, dayOrder: response.data.length }));
		console.log(response.data.length);
	};

	const getDashboardData = async () => {
		const response = await api.get(`/dashboard`);
		const { order, kit, user } = response.data;
		setTotalItems((prev) => ({
			...prev,
			order: order,
			kit: kit,
			user: user,
		}));
	};

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyCLYeK1ksPfWhPxgZZ687Vdi-eDFLFRCr0',
	});

	const [map, setMap] = useState(null);
	const [pins, setPins] = useState<{ geo: any; os: string }[]>([]);

	const onLoad = useCallback(
		(map) => {
			map.setZoom(12);
			setMap(map);
		},
		[pins]
	);

	const onUnmount = useCallback(() => {
		setMap(null);
	}, [map]);

	const getGeolocation = async () => {
		const getLocationsOrders = orders.map(async (order) => {
			const address = `${order.order.address} ${order.order.neighborhood} ${order.order.city}`;

			const formatedAddress = address
				.replaceAll('  ', ' ')
				.replaceAll(' ', '%20');

			const response = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${formatedAddress}&key=AIzaSyCLYeK1ksPfWhPxgZZ687Vdi-eDFLFRCr0`
			);

			return { geolocation: response.data, os: order.order.qr_code };
		});
		const geolocation = await Promise.all(getLocationsOrders);

		const formatedGeo = geolocation.map((loc) => ({
			geo: loc.geolocation.results[0].geometry.location,
			os: loc.os,
		}));

		console.log(formatedGeo);

		setPins(formatedGeo);
	};
	useEffect(() => {
		getOrders();
		getDashboardData();
	}, []);

	useEffect(() => {
		if (orders.length > 0) {
			getGeolocation();
		}
	}, [orders]);

	return (
		<div>
			<div className="row pt-0">
				<div className="col-12 col-md-3 ">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Ordens de Serviço</p>
								<h3 className="fw-bold">
									{totalItems.dayOrder}
									<span className="card-text"> Hoje</span>
								</h3>
							</div>
							<div className="icons">
								<BsClipboardDataFill />
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Ordens de Serviço</p>
								<h3 className="fw-bold">
									{totalItems.order}
									<span className="card-text"> Total</span>
								</h3>
							</div>
							<div className="icons">
								<BsClipboardDataFill />
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3  d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Kits Cadastrados</p>
								<h3 className="fw-bold">
									{totalItems.kit}
									<span className="card-text"> Total</span>
								</h3>
							</div>
							<div className="icons">
								<BsTools />
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Usuários</p>
								<h3 className="fw-bold">
									{totalItems.user}
									<span className="card-text"> Total</span>
								</h3>
							</div>
							<div className="icons">
								<BsPersonBadgeFill />
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-8 mt-4 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<p className="card-title">Atendimentos realizado hoje</p>
							{isLoaded && (
								<GoogleMap
									mapContainerStyle={containerStyle}
									center={center}
									onLoad={onLoad}
									onUnmount={onUnmount}
									options={{ gestureHandling: 'greedy' }}
								>
									{pins.map((pin, index) => (
										<Marker
											position={pin.geo}
											label={{ text: `${pin.os}`, className: 'pin-label' }}
											animation={google.maps.Animation.DROP}
										></Marker>
									))}
								</GoogleMap>
							)}
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4 mt-4  d-none d-md-block">
					<div className="card">
						<div className="card-body bg-info">
							<p className="card-title mb-5">Aviso Importante</p>
							<h4 className="fw-bold">Sistema em desenvolvimento</h4>
							<h4 className="fw-bold mb-5">Aguarde lançamento</h4>

							<a className="mt-5 text-white" href="/version">
								Saiba Mais
							</a>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-12 mt-4">
					<div className="card list-height overflow-y-auto pb-0 mb-5">
						<div className="card-header pb-0">
							<p className="card-title">OS do dia</p>
						</div>

						<table className="w-100">
							<thead>
								<tr>
									<th className="text-start">Numero OS</th>
									<th className="text-center">Hora</th>
									<th className="text-start">Endereço</th>
									<th className="text-start">Bairro</th>
									<th className="text-start">Cidade</th>
									<th className="text-start">Status</th>
									<th>Ver</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => (
									<>
										<ListItemOrdersDash
											key={order.order.id}
											qrcode={order.order.qr_code}
											register={order.order.registerDay}
											id={order.order.id}
											status={order.order.status}
											address={order.order.address}
											neighborhood={order.order.neighborhood}
											city={order.order.city}
										/>
										<hr />
									</>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
