import {BsFillPlusSquareFill} from 'react-icons/bs';
import ListItem from '../../components/ListItem';
import { NavLink } from 'react-router';

export default function Tags() {
	const listMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
	return (
		<div>

					<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
						<NavLink to="form" className="btn">
							<BsFillPlusSquareFill  /> Novo
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
