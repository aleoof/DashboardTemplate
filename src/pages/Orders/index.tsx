import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import ListItemOrders from '../../components/ListItem/Orders';
import './styles.css';

import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { api } from '../../api';

export default function Orders() {
	const [orders, setOrders] = useState<
		Array<{ id: number; qr_code: string; address: string }>
	>([]);

	const getOrders = async () => {
		const response = await api.get('orders');
		setOrders(response.data);
	};
	useEffect(() => {
		getOrders();
	}, []);

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
									qrcode={order.qr_code}
									id={order.id}
									address={order.address}
								/>
								<hr />
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
