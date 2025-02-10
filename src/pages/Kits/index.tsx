import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem/Kits';
import { NavLink } from 'react-router';
import { api } from '../../api';
import { useEffect, useState } from 'react';

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
				<button className="btn m-1">
					<BsFillTrashFill /> Exlcuir
				</button>
				<NavLink to="form" className="btn">
					<BsFillPlusSquareFill /> Novo
				</NavLink>
			</div>

			<div className="card list-height overflow-y-auto p-3 pb-0 mb-5">
				{kits.map((kit) => (
					<>
						<ListItem title={kit.description} id={`${kit.id}`} />
						<hr />
					</>
				))}
			</div>
		</div>
	);
}
