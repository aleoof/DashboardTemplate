import {BsEyeFill, BsFillPencilFill} from 'react-icons/bs';
import { Link } from 'react-router';
import './index.css';
import useAccessLevelStore from "../../../stores/accessLevelStore.ts";

export default function ListItemOrders({
	title,
	// phone,
	id,
}: {
	title?: string;
	phone?: string;
	id?: string;
}) {
	const { accessLevel } = useAccessLevelStore();
	return (

		<tr>
			<td className="text-start title align-content-center">
				<div className="d-flex gap-3 ">
					<img
						alt="John Michael"
						src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/team-2.e725aef8c892cb21f262.jpg"
						className="img-fluid img-thumbnail"
					/>
					<div className="align-content-center" >
						<p className="title">{title}</p>
					</div>
				</div>
			</td>
			<td className="align-content-center text-start">?username</td>
			<td className="align-content-center">?type</td>
			<td className="align-content-center text-start">?email</td>
			<td className="align-content-center text-center">
				<i className="status active"></i>Ativo
			</td>
			<td className="align-content-center">

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

			</td>
		</tr>
	);
}
