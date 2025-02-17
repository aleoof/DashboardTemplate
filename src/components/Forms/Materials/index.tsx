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
		<div>
			<h4>Material</h4>
			<hr />
			<form onSubmit={saveMaterial}>
				<div className="mb-3">
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

				<button type="submit" className="btn btn-primary">
					Salvar
				</button>
			</form>
		</div>
	);
}
