import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { Outlet, useNavigate } from 'react-router';

import useAccessLevelStore from '../stores/accessLevelStore';

export default function Layout() {
	const navigate = useNavigate();
	const { handleAccessLevel } = useAccessLevelStore();
	const [token, setToken] = useState(localStorage.getItem('token') || '');
	const [level, setLevel] = useState(localStorage.getItem('accessLevel') || '');

	useEffect(() => {
		setToken(localStorage.getItem('token') || '');
		setLevel(localStorage.getItem('accessLevel') || '');
		if (!token) {
			navigate('/login');
		}

		handleAccessLevel(parseInt(level || ''));
	}, []);

	return (
		<>
			{token && (
				<div className="min-vh-100">
					<div className="row m-0">
						<div className="col-md-2 p-0">
							<Sidebar />
						</div>

						<div className="col-md-10 p-md-5">
							<Navbar />
							<Outlet />
						</div>
					</div>
				</div>
			)}
		</>
	);
}
