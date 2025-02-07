import { BsPencilSquare, BsQrCode } from 'react-icons/bs';
import { Link } from 'react-router';

export default function ListItemOrders({
	title,
	adress,
	id,
}: {
	qrcode?: string;
	title?: string;
	adress?: string;
	id?: string;
}) {
	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex gap-3">
				<input type="checkbox" />
				<p className="fs-6 mb-0"><BsQrCode /></p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{title}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{adress}</p>
			</div>
			<Link to={`form?id=${id}`}>
				<BsPencilSquare />
			</Link>
		</div>
	);
}
