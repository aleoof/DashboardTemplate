import { BsFillPlusSquareFill} from 'react-icons/bs';
import ListItemUsers from '../../components/ListItem/Users';
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
				<NavLink to="form" className="btn">
					<BsFillPlusSquareFill /> Novo
				</NavLink>
			</div>
			<div className="card list-height overflow-y-auto pb-0 mb-5">
				<div className="card-header">
					<p className="card-title">Lista de usuários</p>
				</div>
				<table className="w-100">
					<thead>
					<tr>
						<th className="text-start">Usuário</th>
						<th className="align-content-center text-start">User</th>
						<th>Tipo</th>
						<th className="align-content-center text-start">Email</th>
						<th className="align-content-center text-center">Status</th>
						<th>Ações</th>
					</tr>
					</thead>
					<tbody>
					{users.map((item, index) => (
						<>
							<ListItemUsers key={index} title={item.name} id={item.id}  />
							{users.length - 1 !== index && <hr />}
						</>
					))}
					</tbody>
				</table>
			</div>
		</div>

	);
}
