import { useEffect, useState } from 'react';
import { api } from '../../../api';

export default function OrdersForm() {
	const [kits, setKits] = useState([]);

	const getKits = async () => {
		const response = await api.get('kits');
		setKits(response.data);
	};

	useEffect(() => {
		getKits();
	}, []);

	return (
		<div className="card list-height overflow-y-auto p-3 pb-3 mb-5">
			<div className="card-body row">
			<form>
				<div className="row">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Endereço
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3 col-5">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Bairro
					</label>
					<input type="text" className="form-control" />
				</div>

				<div className="mb-3 col-5">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Município
					</label>
					<input type="text" className="form-control" />
				</div>

				<div className="mb-3 col-2">
					<label htmlFor="exampleInputEmail1" className="form-label">
						UF
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						OBS:
					</label>
					<textarea className="form-control"/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Kits
					</label>
					<select className="form-select" aria-label="Default select example">
						<option selected disabled>
							Selecione o(s) Kit(s)
						</option>
						{kits.map((kit) => (
							<option value={kit.id}>{kit.description}</option>
						))}
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Salvar
				</button>
				</div>
			</form>
			</div>
		</div>
	);
}
