import { BsEyeFill, BsFillPencilFill } from 'react-icons/bs';
import { Link } from 'react-router';
import { format } from 'date-fns';
import useAccessLevelStore from '../../../stores/accessLevelStore';
import { ptBR } from 'date-fns/locale';
import Status from '../../StatusOS';

export default function ListItemOrders({
	address,
	id,
	qrcode,
	neighborhood,
	city,
	register,
	status,
	kit,
}: {
	qrcode?: string;
	address?: string;
	neighborhood?: string;
	city?: string;
	register?: string;
	state?: string;
	id?: string | number;
	status?: number;
	kit?: string;
}) {
	const { accessLevel } = useAccessLevelStore();
	const date = register ? format(register, 'HH:mm:ss', { locale: ptBR }) : '';

	return (
		<tr>
			<td className="text-start title align-content-center">
				<div className="d-flex gap-3 ">
					<div className="align-content-center">
						<p className="title">#{qrcode}</p>
					</div>
				</div>
			</td>
			{accessLevel === 0 ? (
				<td className="align-content-center">{date}</td>
			) : (
				<td className="align-content-center">{kit}</td>
			)}
			<td className="align-content-center text-start">{address}</td>
			<td className="align-content-center text-start">{neighborhood}</td>
			<td className="align-content-center text-start">{city}</td>
			<td className="align-content-center text-start">
				<Status statusOS={status} />
			</td>
			<td className="align-content-center">
				{accessLevel === 2 ||
					(accessLevel === 0 && (
						<Link to={`orders/view?id=${id}`}>
							<BsEyeFill />
						</Link>
					))}
				{accessLevel === 0 && (
					<Link to={`orders/form?id=${id}`}>
						<BsFillPencilFill />
					</Link>
				)}
			</td>
		</tr>
	);
}
