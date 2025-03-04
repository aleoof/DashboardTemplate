import {NavLink} from 'react-router';
import { privateRoutes } from '../../routes/PrivateRoutes';
import './styles.css';
import useAccessLevelStore from '../../stores/accessLevelStore';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
	MdOutlineLocationCity,
	MdDashboard,
	MdSupervisorAccount,
	MdSubject,
	MdOutlineQrCode2,
	MdOutlineHandyman,
	MdHardware,
	MdDocumentScanner

} from "react-icons/md";
import {Offcanvas} from "react-bootstrap";

export default function Sidebar() {
	const { accessLevel } = useAccessLevelStore();
	function icons(icon: string) {
		switch (icon) {
			case 'dashboard':
				return <MdDashboard />;
			case 'order':
				return <MdDocumentScanner/>;
			case 'kits':
				return <MdOutlineHandyman />;
			case 'tag':
				return <MdOutlineQrCode2 />;
			case 'materials':
				return <MdHardware />;
			case 'users':
				return <MdSupervisorAccount />;
			case 'version':
				return <MdSubject />;
			default:
				return <MdSubject />;
		}
	}

	return (

		<>
			{[ 'md'].map((expand) => (
				<Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
					<Container>
						<Navbar.Brand href="#" ><MdDocumentScanner className="icon-brand"/>HUBOS</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									Offcanvas
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>

								<Nav className="justify-content-end flex-grow-1 pe-3">
									<div className="company d-flex">
										<MdOutlineLocationCity style={{fontSize:"30px", marginRight: "10px"}}/>
										<div>
											<h5>Almirante Tamandaré</h5>
											<p>Prefeitura da cidade</p>
										</div>

									</div>
									{privateRoutes.map((route) => (
										<>
											{route?.access?.some((ac) => ac === accessLevel) && (

												<NavLink
													className="nav-link"
													aria-current="page"
													to={route.path}
												>
													<div className="iconSide">{icons(route.icon)}</div> <span>{route.name}</span>
												</NavLink>
											)}
										</>
									))}
								</Nav>

							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}
