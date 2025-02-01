import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Layout({ children }) {
	return (
		<div className="row vh-100 m-0">
			<div className="col-2 p-0">
				<Sidebar />
			</div>
			<div className="col-10 p-0">{children}</div>
		</div>
	);
}
