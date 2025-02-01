import { NavLink } from 'react-router';
import './styles.css';

function Login() {
	return (
		<div className="container">
			<div className="login row align-items-center justify-content-center">
				<div className="col-6 p-0 h-30 card overflow-hidden">
					<div className="h-100 w-100 d-flex">
						<div className="w-50 p-3 bg-primary"></div>
						<div className="w-50 p-3">
							<h2>Login</h2>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
								>
									Login
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
								>
									Senha
								</label>
								<input
									type="password"
									className="form-control"
									id="exampleFormControlInput1"
								/>
							</div>
							<div className="mb-3 d-flex w-100 justify-content-between align-items-center">
								<button type="button" className="btn btn-primary">
									Entrar
								</button>
								<NavLink
									className="nav-link active fs-6 text-decoration-underline"
									to="/sign-in"
								>
									Cadastrar
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
