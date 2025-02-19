import {BsFillPlusSquareFill} from 'react-icons/bs';
import ListItem from '../../components/ListItem/Kits';
import {NavLink} from 'react-router';
import {api} from '../../api';
import {useEffect, useState} from 'react';

export default function Kits() {
	const [kits, setKits] = useState<Array<{ id: number; description: string }>>(
		[]
	);

	const getKits = async () => {
		const response = await api.get('kits');
		setKits(response.data);
	};

	useEffect(() => {
		getKits();
	}, []);
	return (
		<div>
			<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
				<NavLink to="form" className="btn">
					<BsFillPlusSquareFill /> Novo
				</NavLink>
			</div>
			<div className="card list-height overflow-y-auto pb-0 mb-5">
				<div className="card-header">
					<p className="card-title">Lista de Kits</p>
				</div>
				<table className="w-100">
					<thead>
					<tr>
						<th className="text-start">Kit</th>
						<th>Status</th>
						<th>Ações</th>
					</tr>
					</thead>
					<tbody>
					{kits.map((kit) => (
						<>
							<ListItem title={kit.description} id={`${kit.id}`} />
							<hr />
						</>
					))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
