import { useEffect, useState } from 'react';
import { api } from '../../../api';
import { useNavigate, useSearchParams } from 'react-router';

export default function MaterialsForm() {
	const [formData, setFormData] = useState<{ [field: string]: string }>({});
	const route = useNavigate();
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const saveMaterial = async (e: any) => {
		e.preventDefault();
		if (id) {
			await api.put(`material/${id}`, formData);
		} else {
			await api.post('material', formData);
		}
		route('/materials');
	};

	const getMaterial = async () => {
		const response = await api.get(`material/${id}`);
		const description = response.data.description;
		setFormData({ description });
	};

	useEffect(() => {
		getMaterial();
	}, []);

	return (
		<div className="row">
			<div className="col-md-3">
				<div className="card list-height overflow-y-auto pb-0 mb-5">
					<div className="card-header">
						<p className="card-title">Materiais</p>
					</div>
					<div className="card-body p-3">

					</div>
				</div>
			</div>
			<div className="col-md-9">
			<div className="card list-height overflow-y-auto pb-0 mb-5">
				<div className="card-header">
					<p className="card-title">Editar</p>
					<button type="submit" className="btn btn-primary">
						Salvar
					</button>
				</div>
				<hr/>
				<div className="card-body p-3">
					<form onSubmit={saveMaterial}>
						<div className="row">
						<div className="mb-3 col-12">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Descrição
							</label>
							<input
								value={formData.description}
								type="text"
								className="form-control"
								id="description"
								onChange={(e) => setFormData({ [e.target.id]: e.target.value })}
							/>
						</div>

						<div className="mb-3 col-6">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Tipo
							</label>
							<input
								value={formData.description}
								type="text"
								className="form-control"
								id="description"
								onChange={(e) => setFormData({ [e.target.id]: e.target.value })}
							/>
						</div>
						<div className="mb-3 col-6">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Status
							</label>
							<input
								value={formData.description}
								type="text"
								className="form-control"
								id="description"
								onChange={(e) => setFormData({ [e.target.id]: e.target.value })}
							/>
						</div>
						</div>
					</form>
				</div>
			</div>
			</div>
		</div>
	);
}
