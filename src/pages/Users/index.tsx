import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem';
import { NavLink } from 'react-router';
import { api } from '../../api';
import { useEffect } from 'react';

export default function Users() {
	const getUsers = async () => {
		try {
			const response = await api.get('/users');
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getUsers();
	});
	const listMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
	return (
		<div className="container pt-5">
			<h4>Usuários</h4>
			<hr />
			<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
				<button className="btn text-danger">
					<BsFillTrashFill style={{ height: '20px', width: '20px' }} />
				</button>
				<NavLink to="form" className="btn text-success h-10">
					<BsFillPlusSquareFill style={{ height: '20px', width: '20px' }} />
				</NavLink>
			</div>
			<div className="card list-height overflow-y-auto p-3 pb-3 mb-5">
				{listMock.map((item, index) => (
					<>
						<ListItem />
						{listMock.length - 1 !== index && <hr />}
					</>
				))}
			</div>
		</div>
	);
}
