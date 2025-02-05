// import {BsFillPlusSquareFill, BsFillTrashFill} from "react-icons/bs";
// import {NavLink} from "react-router";
// import ListItem from "../../components/ListItem";

import {BsHouseFill, BsClipboardDataFill} from "react-icons/bs";
// import {NavLink} from "react-router";

export default function Dashboard() {
	return (
		<div className="container pt-5">
			<div className="header d-flex justify-content-between">
				<div className="float-start">
					<p><BsHouseFill /> / Dashboard</p>
					<h4><strong>Dashboard</strong></h4>
				</div>
				<div className="float-end">

				</div>
			</div>

			<div className="row d-flex pt-5">
				<div className="col-3">
					<div className="card">
						<div className="card-body">
							<div className="float-start">
								<p className="card-title">Total de Ordens de Serviço</p>
								<h3 className="fw-bold">55<span className="card-text"> Hoje</span></h3>
							</div>
							<div className="icons"><BsClipboardDataFill /></div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<div className="float-start">
									<p className="card-title">Total de Ordens de Serviço</p>
									<h3 className="fw-bold">55<span className="card-text"> Hoje</span></h3>
								</div>
								<div className="icons"><BsClipboardDataFill /></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<div className="float-start">
									<p className="card-title">Total de Ordens de Serviço</p>
									<h3 className="fw-bold">55<span className="card-text"> Hoje</span></h3>
								</div>
								<div className="icons"><BsClipboardDataFill /></div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-3">
					<div className="card">
						<div className="card">
							<div className="card-body">
								<div className="float-start">
									<p className="card-title">Total de Ordens de Serviço</p>
									<h3 className="fw-bold">55<span className="card-text"> Hoje</span></h3>
								</div>
								<div className="icons"><BsHouseFill /></div>
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
								<h4 className="fw-bold">Aguarde lançamento</h4>

								<p className="card-title mt-5 text-white">Saiba Mais</p>
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
