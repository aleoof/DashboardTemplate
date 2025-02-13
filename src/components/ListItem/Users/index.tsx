import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router';
import './index.css';

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
				<div className="d-sm-flex gap-sm-3">
				<p className="card-title mb-0">{title}</p>
				<p className="card-text mb-0">(41) 999541 9995</p>
				</div>
			</div>
			<Link to={`form?id=${id}`}>
				<BsPencilSquare />
			</Link>
		</div>
	);
}
