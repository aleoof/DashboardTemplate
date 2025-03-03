import { IoIosArrowDown } from "react-icons/io";

import { useLocation, useNavigate } from 'react-router';
import './styles.css';

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
				<div className="text-start">
					<p>
						Edson Rodrigues
					</p>
					<a onClick={() => exit()}>
						Sair
					</a>
				</div>
				<div className="align-content-centerm m-2">
					<IoIosArrowDown /></div>
				</div>
		</div>
		<div className="align-content-center m-4">

			{paths(pathname)}
			<h4>
				{paths(pathname)}
			</h4>
		</div>
		</>
	);
}
