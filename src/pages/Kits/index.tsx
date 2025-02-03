import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem';
import { NavLink } from 'react-router';

export default function Kits() {
	const listMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
	return (
		<div className="container pt-5">
			<h4>Kits</h4>
			<hr />
			<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
				<button className="btn text-danger">
					<BsFillTrashFill style={{ height: '20px', width: '20px' }} />
				</button>
				<NavLink to="form" className="btn text-success h-10">
					<BsFillPlusSquareFill style={{ height: '20px', width: '20px' }} />
				</NavLink>
			</div>
			<div className="card list-height overflow-y-auto p-3 pb-0 mb-5">
				{listMock.map(() => (
					<>
						<ListItem />
						<hr />
					</>
				))}
			</div>
		</div>
	);
}
