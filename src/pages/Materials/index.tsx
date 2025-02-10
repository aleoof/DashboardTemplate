import { BsFillPlusSquareFill, BsFillTrashFill } from 'react-icons/bs';
import ListItem from '../../components/ListItem';
import './styles.css';
import Modal from '../../components/Modal';
import useModalStore from '../../stores/modalStore';
import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { api } from '../../api';

export default function Materials() {
	const [materials, setMaterials] = useState<
		Array<{ id: number; description: string }>
	>([]);

	const { openModal, closeModal } = useModalStore((state) => state);
	const getMaterials = async () => {
		const response = await api.get('materials');
		setMaterials(response.data);
	};
	useEffect(() => {
		getMaterials();
	}, []);
	return (
		<>
			<div>
				<div className="d-flex p-2 pt-0 justify-content-end align-items-center">
					<button className="btn m-1" onClick={openModal}>
						<BsFillTrashFill /> Exlcuir
					</button>
					<NavLink to="form" className="btn">
						<BsFillPlusSquareFill /> Novo
					</NavLink>
				</div>
				<div className="card list-height overflow-y-auto p-3 pb-0 mb-5">
					{materials.map((material) => (
						<>
							<ListItem title={material.description} id={material.id} />
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
