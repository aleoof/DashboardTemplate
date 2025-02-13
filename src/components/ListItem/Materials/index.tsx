import { BsPencilSquare, BsBox2Fill } from 'react-icons/bs';
import { Link } from 'react-router';
import './index.css';

export default function ListItemOrders({
	title,
	id,
}: {
	title?: string;
	phone?: string;
	id?: number;
}) {
	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex gap-3">
				<div className="thumbnail">
					<BsBox2Fill />
				</div>
				<p className="fs-6 mb-0">{title}</p>
			</div>
			<Link to={`form?id=${id}`}>
				<BsPencilSquare />
			</Link>
		</div>
	);
}
