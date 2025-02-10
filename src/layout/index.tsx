import { ReactNode, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
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
		<div className="vh-100">
			<div className="row m-0">
				<div className="col-md-2 p-0">
					<Sidebar />
				</div>

				<div className="col-md-10 p-md-5">
					<Navbar />
					{children}</div>
			</div>
		</div>
	);
}
