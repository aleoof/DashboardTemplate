import { BsFillPlusSquareFill, BsFillTrashFill} from 'react-icons/bs';
import ListItemOrders from '../../components/ListItem/Orders';
import './styles.css';
import Modal from '../../components/Modal';
import useModalStore from '../../stores/modalStore';
import { NavLink } from 'react-router';

export default function Orders() {
	const listMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
	const { openModal, closeModal } = useModalStore((state) => state);
	return (
		<>
			<div>
				<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
					<button className="btn m-1" onClick={openModal}>
						<BsFillTrashFill /> Exlcuir
					</button>
					<NavLink to="form" className="btn">
						<BsFillPlusSquareFill  /> Novo
					</NavLink>

				</div>

				<div className="card list-height overflow-y-auto p-3 pb-0 mb-5">

					<div className="card-body">
					{listMock.map(() => (
						<>
							<ListItemOrders />
							<hr />
						</>
					))}
					</div>
				</div>
			</div>
			<Modal
				cancelCopy="Cancelar"
				copy="Deseja apagar os itens selecionados ?"
				saveCopy="Apagar"
				toggleCancel={closeModal}
				toggleSave={closeModal}
			/>
		</>
	);
}
