import { BsPencilSquare } from 'react-icons/bs';

export default function ListItem({ title }: { title?: string }) {
	return (
		<div className="w-100 h-20 d-flex align-items-center p-2 justify-content-between">
			<div className="d-flex gap-3">
				<input type="checkbox" />
				<p className="fs-6 mb-0">{title}</p>
			</div>
			<BsPencilSquare />
		</div>
	);
}
