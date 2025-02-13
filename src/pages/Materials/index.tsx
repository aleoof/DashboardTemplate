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
				<div className="card list-height overflow-y-auto p-3 pb-0 mb-5">
					{materials.map((material) => (
						<>
							<ListItem id={material.id} title={material.description} />
							<hr />
						</>
					))}
				</div>
			</div>
		</>
	);
}
