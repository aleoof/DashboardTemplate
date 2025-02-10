import {
	BsBook,
	BsTools,
	BsFillPersonLinesFill,
	BsQrCode,
	BsQrCodeScan,
	BsReverseListColumnsReverse,
	BsBox2
} from 'react-icons/bs';
import { NavLink } from 'react-router';
import { privateRoutes } from '../../routes/PrivateRoutes';
import './styles.css';

export default function Sidebar() {
	function icons(icon: string) {
		switch (icon) {
			case 'dashboard':
				return <BsBook />;
			case 'order':
				return <BsQrCodeScan />;
			case 'kits':
				return <BsTools />;
			case 'tag':
				return <BsQrCode />;
			case 'materials':
				return <BsBox2 />;
			case 'users':
				return <BsFillPersonLinesFill />;
			case 'version':
				return <BsReverseListColumnsReverse />;
			default:
				return <BsBook />;
		}
	}

	return (
		<div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100">
			<a
				href="/"
				className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
			>
				<h2>
					<b>HUB</b>OS
				</h2>
			</a>

			<hr />
			<ul className="nav nav-pills flex-column mb-auto">
				{privateRoutes.map((route) => (
					<li className="nav-item">
						<NavLink
							className="nav-link d-flex gap-2"
							aria-current="page"
							to={route.path}
						>
							<div>{icons(route.icon)}</div> <span>{route.name}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
