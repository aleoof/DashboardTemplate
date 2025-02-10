import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router';

export default function ListItemOrders({
	title,
	// phone,
	id,
}: {
	title?: string;
	phone?: string;
	id?: string;
}) {
	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex gap-3">
				<input type="checkbox" />
				<img
					alt="John Michael"
					src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/team-2.e725aef8c892cb21f262.jpg"
					className="img-fluid img-thumbnail"
				/>
				<p className="fs-6 mb-0">{title}</p>
				<p className="fs-6 mb-0">(41) 999541 9995</p>
			</div>
			<Link to={`form?id=${id}`}>
				<BsPencilSquare />
			</Link>
		</div>
	);
}
