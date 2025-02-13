// import {BsFillPlusSquareFill, BsFillTrashFill} from "react-icons/bs";
// import {NavLink} from "react-router";
// import ListItem from "../../components/ListItem";

import {BsClipboardDataFill, BsPersonBadgeFill, BsTools} from "react-icons/bs";
import ListItemOrdersDash from "../../components/ListItem/OrdersDash";
import ListItemUsersLog from "../../components/ListItem/UsersLog";
// import {NavLink} from "react-router";

export default function Dashboard() {
	const listMock = [1, 2, 3, 4, 5];
	return (

		<div>
			<div className="row d-flex pt-3">
				<div className="col-12 col-md-3 mt-4">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Ordens de Serviço</p>
								<h3 className="fw-bold">55<span className="card-text"> Hoje</span></h3>
							</div>
							<div className="icons"><BsClipboardDataFill /></div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 mt-4 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Ordens de Serviço</p>
								<h3 className="fw-bold">445<span className="card-text"> Total</span></h3>
							</div>
							<div className="icons"><BsClipboardDataFill /></div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 mt-4  d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Kits Cadastrados</p>
								<h3 className="fw-bold">12<span className="card-text"> Total</span></h3>
							</div>
							<div className="icons"><BsTools /></div>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-3 mt-4 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Usuários</p>
								<h3 className="fw-bold">12<span className="card-text"> Total</span></h3>
							</div>
							<div className="icons"><BsPersonBadgeFill /></div>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-8 mt-4 d-none d-md-block">
					<div className="card">
						<div className="card-body">
							<p className="card-title">Atendimentos realizado hoje</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4 mt-4  d-none d-md-block">
						<div className="card">
							<div className="card-body bg-info">
								<p className="card-title mb-5">Aviso Importante</p>
								<h4 className="fw-bold">Sistema em desenvolvimento</h4>
								<h4 className="fw-bold mb-5">Aguarde lançamento</h4>

								<a className="mt-5 text-white" href="/version">Saiba Mais</a>
							</div>
					</div>
				</div>

				<div className="col-12 col-md-6 mt-4">
					<div className="card">
						<div className="card-body">
							<p className="card-title">OS do dia</p>
							{listMock.map(() => (
								<>
									<ListItemOrdersDash />
									<hr />
								</>
							))}
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 mt-4  d-none d-sm-none d-md-block">
					<div className="card">
						<div className="card-body">
							<p className="card-title">Ultimos Acessos</p>
							{listMock.map(() => (
								<>
									<ListItemUsersLog />
									<hr />
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
