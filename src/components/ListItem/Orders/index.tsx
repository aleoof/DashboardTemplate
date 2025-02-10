import { BsFillPencilFill, BsQrCode, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router';

export default function ListItemOrders({
	address,
	id,
	qrcode,
   	neighborhood,
   	city,
	state,
}: {
	qrcode?: string;
	address?: string;
	neighborhood?: string;
	city?: string;
	state?: string;
	id?: string | number;
}) {
	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex gap-3">
				<input type="checkbox"/>
				<div className="thumbnail">
					<BsQrCode />
				</div>
				<p className="fs-6 mb-0">{qrcode}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">10/02/2025</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{address}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{neighborhood}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{city}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{state}</p>
			</div>
			<Link to={`form?id=${id}`}>
				<BsFillPencilFill />
			</Link>
			<Link to={`view?id=${id}`}>
				<BsEyeFill />
			</Link>
		</div>
	);
}
