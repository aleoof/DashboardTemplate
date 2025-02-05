// import {BsFillPlusSquareFill, BsFillTrashFill} from "react-icons/bs";
// import {NavLink} from "react-router";
// import ListItem from "../../components/ListItem";

import {BsHouseFill} from "react-icons/bs";
// import {NavLink} from "react-router";

export default function Dashboard() {
	return (
		<div className="container pt-5">
			<div className="card header d-flex justify-content-between">
				<div>
					<p><BsHouseFill /> / Dashboard</p>
					<h4>Dashboard</h4>
				</div>
			</div>

			<div className="row d-flex">
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							<p className="card-title">Total de Ordens de Serviço</p>
							<h1 className="fw-bold">55</h1>
							<p>Hoje</p>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<p className="card-title">Total de Kits</p>
								<h1 className="fw-bold">57</h1>
								<p>Hoje</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<p className="card-title">Total de Kits Cadastrados</p>
								<h1 className="fw-bold">7</h1>
								<p>Total</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<p className="card-title">Total de Materiais</p>
								<h1 className="fw-bold">15</h1>
								<p>total</p>
							</div>
						</div>
					</div>
				</div>

				<div className="col-8 mt-4">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<p className="card-title">Total de Kits</p>
								<h1 className="fw-bold">57</h1>
								<p>Hoje</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-4 mt-4">
					<div className="card">
						<div className="card bg-info">
							<div className="card-body">
								<p className="card-title">Aviso Importante</p>
								<h4 className="fw-bold">Sistema em desenvolvimento</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="col-6 mt-4">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<p className="card-title">Maps</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6 mt-4">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<p className="card-title">Relatório</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}
