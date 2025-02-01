import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Layout({ children }) {
	return (
		<div className="row h-100">
			<div className="col-12">
				<Navbar />
			</div>
			<div className="col-3">
				<Sidebar />
			</div>
			<div className="col-8 p-4">{children}</div>
		</div>
	);
}
