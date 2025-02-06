import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem';
import { NavLink } from 'react-router';
import { api } from '../../api';
import { useEffect, useState } from 'react';

export default function Users() {
	const [users, setUsers] = useState<Array<{ name: string; id: string }>>([]);

	const getUsers = async () => {
		try {
			const response = await api.get('/users');
			setUsers(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div>
			<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
				<button className="btn m-1">
					<BsFillTrashFill /> Exlcuir
				</button>
				<NavLink to="form" className="btn">
					<BsFillPlusSquareFill  /> Novo
				</NavLink>
			</div>
			<div className="card list-height overflow-y-auto p-3 pb-3 mb-5">
				{users.map((item, index) => (
					<>
						<ListItem key={index} title={item.name} id={item.id} />
						{users.length - 1 !== index && <hr />}
					</>
				))}
			</div>
		</div>
	);
}
