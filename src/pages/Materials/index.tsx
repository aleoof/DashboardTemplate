import { BsFillPlusSquareFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem/Materials';
import './styles.css';
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { api } from '../../api';

export default function Materials() {
	const [materials, setMaterials] = useState<
		Array<{ id: number; description: string }>
	>([]);

	const getMaterials = async () => {
		const response = await api.get('materials');
		setMaterials(response.data);
	};
	useEffect(() => {
		getMaterials();
	}, []);
	return (
		<>
			<div>
				<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
					<NavLink to="form" className="btn">
						<BsFillPlusSquareFill /> Novo
					</NavLink>
				</div>
				<div className="card overflow-y-auto pb-0 mb-5">
					<div className="card-header">
						<p className="card-title">Lista de Materiais</p>
					</div>
					<table className="w-100">
						<thead>
						<tr>
							<th className="text-start">Material</th>
							<th>Tipo</th>
							<th>Status</th>
							<th>Ações</th>
						</tr>
						</thead>
						<tbody>
						{materials.map((material) => (
							<>
								<ListItem id={material.id} title={material.description} />
							</>
						))}
						</tbody>
					</table>
				</div>
			</div>

		</>
	);
}
