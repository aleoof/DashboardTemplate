import {
	BsFillPencilFill,
	BsQrCode,
	BsEyeFill,
	BsFillTrashFill,
	BsCopy,
} from 'react-icons/bs';
import { Link } from 'react-router';
import useAccessLevelStore from '../../../stores/accessLevelStore';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function ListItemOrders({
	address,
	id,
	qrcode,
	neighborhood,
	city,
	state,
	date,
	deleteListItem,
	duplicateItem,
}: {
	qrcode?: string;
	address?: string;
	neighborhood?: string;
	city?: string;
	state?: string;
	id?: string | number;
	date: Date;
	deleteListItem?: () => void;
	duplicateItem?: () => void;
}) {
	const { accessLevel } = useAccessLevelStore();
	const formattedDate = date
		? format(date, 'dd/MM/yy hh:mm', { locale: ptBR })
		: '';
	return (
		<div className="w-100 h-20 d-flex align-items-center p-md-2 justify-content-between">
			<div className="d-flex align-items-center gap-3">
				<div className="thumbnail">
					<BsQrCode />
				</div>
				<div className="d-sm-flex align-items-center gap-sm-3">
					<h3 className="card-title mb-0">{qrcode}</h3>
					<p className="card-title mb-0">{formattedDate}</p>
				</div>
			</div>

			<div className="d-sm-flex align-items-center gap-sm-3">
				<p className="card-title mb-0">{address}</p>
				<p className="card-title mb-0">
					{neighborhood} {city}/{state}
				</p>
			</div>

			<span className="d-flex gap-4">
				{accessLevel === 2 ||
					(accessLevel === 0 && (
						<Link to={`view?id=${id}`}>
							<BsEyeFill />
						</Link>
					))}

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
				{accessLevel === 0 && (
					<a className="" onClick={duplicateItem}>
						<BsCopy />
					</a>
				)}
			</span>
		</div>
	);
}
