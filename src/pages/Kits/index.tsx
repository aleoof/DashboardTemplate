import { BsFillPlusSquareFill, BsFillTrashFill, BsHouseFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem';
import { NavLink } from 'react-router';

export default function Kits() {
	const listMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
	return (

		<div className="container pt-5">
			<div className="header d-flex justify-content-between">
				<div className="float-start">
					<p><BsHouseFill /> / Kits / Lista</p>
					<h4>Kits</h4>
				</div>
				<div className="float-end">
					<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
						<button className="btn icons m-1">
							<BsFillTrashFill />
						</button>
						<NavLink to="form" className="btn icons">
							<BsFillPlusSquareFill  />
						</NavLink>
					</div>
				</div>
			</div>

			<div className="card list-height overflow-y-auto p-3 pb-0 mb-5 mt-5">
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
