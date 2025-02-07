import {BsPersonFillGear, BsHouseFill, BsBoxArrowInRight} from "react-icons/bs";
import {useLocation, useNavigate} from "react-router";

export default function Navbar() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const exit = () => {
		localStorage.clear();
		navigate('/login');
	};
	return (
		<div className="header d-flex justify-content-between mb-4">
			<div className="float-start">
				<p><BsHouseFill /> { pathname }</p>
				<h4><strong>Dashboard</strong></h4>
			</div>
			<div className="float-end d-flex search">
				<input
					type="text"
					className="form-control nav"
					id="name"
					placeholder="Pesquisar"
					value=""
				/>
				<a className="icons_nav"><BsPersonFillGear /></a>
				<a className="icons_nav" onClick={() => exit()}>
					<BsBoxArrowInRight />
				</a>
			</div>
		</div>
	);
}
