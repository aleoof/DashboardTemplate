import {
	BsFillPencilFill,
	BsQrCode,
	BsEyeFill,
	BsFillTrashFill,
} from 'react-icons/bs';
import { Link } from 'react-router';
import Modal from '../../Modal';
import useModalStore from '../../../stores/modalStore';
import useAccessLevelStore from '../../../stores/accessLevelStore';

export default function ListItemOrders({
   address,
   id,
   qrcode,
   neighborhood,
   city,
   state,
}: {
	qrcode?: string;
	address?: string;
	neighborhood?: string;
	city?: string;
	state?: string;
	id?: string | number;
}) {
	const { openModal, closeModal } = useModalStore((state) => state);
	const { accessLevel } = useAccessLevelStore();

	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex align-items-center gap-3">
				<div className="thumbnail">
					<BsQrCode />
				</div>
				<div className="align-items-center gap-3">
					<h3 className="card-title mb-0">15001{qrcode}</h3>
					<p className="card-title mb-0">10/02/2025</p>
				</div>

			</div>
			<div className="gap-3">
				<p className="card-title mb-0">Rua Arnaldo Gusi 44 {address}</p>
				<p className="card-title mb-0">
					{neighborhood}
					{city}{state}
					Xaxim Curitiba/PR </p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{neighborhood}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{city}</p>
			</div>
			<div className="d-flex gap-3">
				<p className="fs-6 mb-0">{state}</p>
			</div>
			<span className="d-flex gap-4">

				{accessLevel === 2 || accessLevel === 0 &&(
					<Link to={`view?id=${id}`}>
						<BsEyeFill />
					</Link>
				)}

			</span>
			<Modal
				cancelCopy="Cancelar"
				copy="Deseja apagar os itens selecionados ?"
				saveCopy="Apagar"
				toggleCancel={closeModal}
				toggleSave={closeModal}
			/>

		</div>
	);
}
