import {BsHouseFill} from "react-icons/bs";

export default function Navbar() {
	return (
		<div className="header d-flex justify-content-between">
			<div className="float-start">
				<p><BsHouseFill /> / Dashboard</p>
				<h4><strong>Dashboard</strong></h4>
			</div>
			<div className="float-end">

			</div>
		</div>
	);
}
