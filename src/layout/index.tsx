import { ReactNode, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import { useNavigate } from 'react-router';

export default function Layout({ children }: { children: ReactNode }) {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	useEffect(() => {
		if (!token) {
			navigate('/login');
		}
	});

	if (!token) {
		return;
	}

	return (
		<div className="row vh-100 m-0">
			<div className="col-2 p-0">
				<Sidebar />
			</div>
			<div className="col-10 p-0">{children}</div>
		</div>
	);
}
