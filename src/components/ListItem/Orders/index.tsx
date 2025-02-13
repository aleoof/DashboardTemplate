import {
	BsFillPencilFill,
	BsQrCode,
	BsEyeFill,
	BsFillTrashFill,
} from 'react-icons/bs';
import { Link } from 'react-router';
import useAccessLevelStore from '../../../stores/accessLevelStore';

export default function ListItemOrders({
	address,
	id,
	qrcode,
	neighborhood,
	city,
	state,
	deleteListItem,
}: {
	qrcode?: string;
	address?: string;
	neighborhood?: string;
	city?: string;
	state?: string;
	id?: string | number;
	deleteListItem?: () => void;
}) {
	const { accessLevel } = useAccessLevelStore();
	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex align-items-center gap-3">
				<div className="thumbnail d-none d-lg-block">
					<BsQrCode />
				</div>
				<span>
					<p className="fs-6 mb-0">{qrcode}</p>
					<p className="fs-6 mb-0">10/02/2025</p>
				</span>
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
			<span className="d-flex gap-4">
				{accessLevel === 0 && (
					<Link to={`form?id=${id}`}>
						<BsFillPencilFill />
					</Link>
				)}
				{accessLevel === 2 && (
					<Link to={`view?id=${id}`}>
						<BsEyeFill />
					</Link>
				)}
				{accessLevel === 0 && (
					<a className="" onClick={deleteListItem}>
						<BsFillTrashFill />
					</a>
				)}
			</span>
		</div>
	);
}
