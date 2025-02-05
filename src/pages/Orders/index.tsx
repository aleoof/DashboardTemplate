import { BsFillPlusSquareFill, BsFillTrashFill, BsHouseFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem';
import './styles.css';
import Modal from '../../components/Modal';
import useModalStore from '../../stores/modalStore';
import { NavLink } from 'react-router';

export default function Orders() {
	const listMock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13];
	const { openModal, closeModal } = useModalStore((state) => state);
	return (
		<>
			<div className="container pt-5">
				<div className="header d-flex justify-content-between">
					<div className="float-start">
						<p><BsHouseFill /> / Ordens / Lista</p>
						<h4>Ordens de Serviço</h4>
					</div>
					<div className="float-end">
						<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
							<button className="btn icons m-1" onClick={openModal}>
								<BsFillTrashFill style={{ height: '20px', width: '20px' }} />
							</button>
							<NavLink to="form" className="btn icons h-10">
								<BsFillPlusSquareFill style={{ height: '20px', width: '20px' }} />
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
