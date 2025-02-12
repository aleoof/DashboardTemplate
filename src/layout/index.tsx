import { ReactNode, useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router';
import useAccessLevelStore from '../stores/accessLevelStore';

export default function Layout({ children }: { children: ReactNode }) {
	const navigate = useNavigate();
	const { handleAccessLevel } = useAccessLevelStore();
	const [token, setToken] = useState(localStorage.getItem('token') || '');
	const [level, setLevel] = useState(localStorage.getItem('accessLevel') || '');

	useEffect(() => {
		setToken (localStorage.getItem('token') || '')
		setLevel (localStorage.getItem('accessLevel') || '')
		if (!token) {
			navigate('/login');
		}

		handleAccessLevel(parseInt(level || ''));
	}, []);

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
					{children}
				</div>
			</div>
		</div>
	);
}
