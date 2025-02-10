import { BsPencilSquare, BsQrCode } from 'react-icons/bs';
import { Link } from 'react-router';

export default function ListItemOrders({
	address,
	id,
	qrcode,
}: {
	qrcode?: string;
	address?: string;
	id?: string | number;
}) {
	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex gap-3">
				<input type="checkbox" />
				<p className="fs-6 mb-0">
					<BsQrCode /> {qrcode}
				</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{id}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{address}</p>
			</div>
			<Link to={`form?id=${id}`}>
				<BsPencilSquare />
			</Link>
		</div>
	);
}
