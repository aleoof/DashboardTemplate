import { useEffect, useState } from 'react';
import { api } from '../../../api';
import { BsFillTrashFill } from 'react-icons/bs';

export default function KitsForm() {
	const [kits, setKits] = useState([]);

	const getKits = async () => {
		const response = await api.get('kits');
		setKits(response.data);
	};

	useEffect(() => {
		getKits();
	}, []);
	return (
		<div>
			<form>
				<h4>Kit</h4>
				<hr />
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Descrição
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3 d-flex justify-content-between align-items-end gap-5">
					<span className="flex-fill">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Materiais
						</label>
						<select className="form-select" aria-label="Default select example">
							<option selected disabled>
								Selecione o(s) Kit(s)
							</option>
							{kits.map((kit) => (
								<option value={kit.id}>{kit.description}</option>
							))}
						</select>
					</span>
					<button className="btn btn-primary" onClick={() => {}}>
						+
					</button>
				</div>
				<div className="mb-3 mt-3">
					<div className="d-flex justify-content-between align-items-end">
						<div>Nome Material</div>
						<div className="d-flex align-items-end gap-5">
							<span>
								<label htmlFor="exampleInputEmail1" className="form-label">
									Quantidade
								</label>
								<input type="text" className="form-control" />
							</span>
							<button className="btn btn-primary" onClick={() => {}}>
								<BsFillTrashFill />
							</button>
						</div>
					</div>
				</div>

				<button type="submit" className="btn btn-primary">
					Salvar
				</button>
			</form>
		</div>
	);
}
