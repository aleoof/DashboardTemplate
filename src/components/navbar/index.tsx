	import { MdHome } from "react-icons/md";

	import { useLocation, useNavigate } from 'react-router';
	import './styles.css';
	import {NavDropdown} from "react-bootstrap";

	export default function Navbar() {
		const { pathname } = useLocation();

		const navigate = useNavigate();

		const exit = async () => {
			await localStorage.clear();
			navigate('/login');
		};

		function paths(path: string) {
			console.log(pathname)
			switch (path) {
				case '/':
					return 'Dashboard';
				case '/orders':
					return 'Ordem de serviço';
				case '/orders/form':
					return 'Ordem de serviço';
				case '/orders/view':
					return 'Ordem de serviço';
				case '/orders/report':
					return 'Relatório ordem de serviço';
				case '/kits':
					return 'Kits';
				case '/tags':
					return 'Etiquetas';
				case '/materials':
					return 'Materiais';
				case '/users':
					return 'Usuários';
				case '/version':
					return 'Versão do Sistema';
				default:
					return '';
			}
		}

		let expand;
		return (
			<>
				<div className="navbar-top d-flex justify-content-between align-content-center mb-md-4 ">

					<div className="search">
						<input
							type="text"
							className="form-control nav d-none d-md-block"
							id="name"
							placeholder="Pesquisar"
							value=""
						/>
					</div>
					<div className="user align-content-center d-flex">
						<img alt="John Michael"
							 src="https://themewagon.github.io/soft-ui-dashboard-react/static/media/team-2.e725aef8c892cb21f262.jpg"
							 className="img-circle-small"/>
						<div className="align-content-center mx-2">
							<NavDropdown
								title="Nome de usuario"
								id={`offcanvasNavbarDropdown-expand-${expand}`}
							>
								<NavDropdown.Item href="#action4">
									Meus dados
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={() => exit()}>
									Sair
								</NavDropdown.Item>
							</NavDropdown>
						</div>
					</div>
				</div>
				<div className="align-content-center mx-5 mt-5">
					<p><MdHome />/{paths(pathname)}</p>
					<h3>
						<strong>{paths(pathname)}</strong>
					</h3>
				</div>
			</>
		);
	}
