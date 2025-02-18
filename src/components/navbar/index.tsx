import {
	BsPersonFillGear,
	BsHouseFill,
	BsBoxArrowInRight
} from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router';

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

	return (
		<div className="header d-flex justify-content-between mb-md-4 ">
			<div className="float-start">
				<p>
					<BsHouseFill /> {pathname}
				</p>
				<h4>
					<strong>{paths(pathname)}</strong>
				</h4>
			</div>
			<div className="float-end d-flex search ">
				<input
					type="text"
					className="form-control nav d-none d-md-block"
					id="name"
					placeholder="Pesquisar"
					value=""
				/>
				<a className="icons_nav">
					<BsPersonFillGear />
				</a>
				<a className="icons_nav" onClick={() => exit()}>
					<BsBoxArrowInRight />
				</a>
			</div>
		</div>
	);
}
