import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

export default function Layout({ children }) {
	return (
		<div className="row vh-100">
			<div className="col-3 p-0">
				<Sidebar />
			</div>
			<div className="col-8 p-0 h-100  overflow-y-scroll p-r-0 pt-5">
				{children}
			</div>
		</div>
	);
}
