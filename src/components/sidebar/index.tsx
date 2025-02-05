import { BsBook } from 'react-icons/bs';
import { NavLink } from 'react-router';
import { privateRoutes } from '../../routes/PrivateRoutes';
import './styles.css';

export default function Sidebar() {
	return (
		<div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100">
			<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
				<h2><b>HUB</b>OS</h2>
			</a>

			<hr/>
			<ul className="nav nav-pills flex-column mb-auto">

				{privateRoutes.map((route) => (
					<li className="nav-item">
						<NavLink
							className="nav-link"
							aria-current="page"
							to={route.path}
						>
							<BsBook /> {route.name}
						</NavLink>
					</li>
				))}
			</ul>
			<hr/>
			<div className="dropdown">
				<a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
				   id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="https://github.com/mdo.png" alt="" width="32" height="32"
						 className="rounded-circle me-2"/>
					<strong>mdo</strong>
				</a>
				<ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
					<li><a className="dropdown-item" href="#">New project...</a></li>
					<li><a className="dropdown-item" href="#">Settings</a></li>
					<li><a className="dropdown-item" href="#">Profile</a></li>
					<li>
						<hr className="dropdown-divider"/>
					</li>
					<li><a className="dropdown-item" href="#">Sign out</a></li>
				</ul>
			</div>


		</div>
	);
}
