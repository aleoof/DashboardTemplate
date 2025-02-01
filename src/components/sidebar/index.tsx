import { NavLink } from 'react-router';
import { privateRoutes } from '../../routes/PrivateRoutes';

export default function Sidebar() {
	return (
		<div className="bg-primary h-100 p-3 text-white">
			<div className="d-flex p-2">
				<h5>Sidebar</h5>
			</div>
			<hr />

			<div className="d-flex flex-column ">
				{privateRoutes.map((route) => (
					<NavLink
						className="text-white p-2 fs-5 text-decoration-none"
						to={route.path}
					>
						{route.name}
					</NavLink>
				))}
			</div>
		</div>
	);
}
