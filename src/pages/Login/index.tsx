import { NavLink, useNavigate } from 'react-router';
import './styles.css';
import { api } from '../../api';
import { useState } from 'react';

function Login() {
	const navigate = useNavigate();
	const [error, setError] = useState(false);
	const [formData, setFormData] = useState<{ login: string; password: string }>(
		{ login: '', password: '' }
	);

	const handleLogin = async (e: any) => {
		try {
			e.preventDefault();
			const { login, password } = formData;
			const response = await api.post('/login', { login, password });
			const { token } = response.data;
			localStorage.setItem('token', token);
			navigate('/');
			setError(false);
		} catch (error) {
			setError(true);
			console.error(error);
		}
	};

	return (
		<div className="container">
			<div className="login row align-items-center justify-content-center">
				<div className="col-6 p-0 h-30 card overflow-hidden">
					<div className="h-100 w-100 d-flex">
						<div className="w-50 p-3 bg-primary"></div>
						<form className="w-50 p-3" onSubmit={handleLogin}>
							<h2>Login</h2>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
								>
									Login
								</label>
								<input
									type="text"
									className="form-control"
									id="login"
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											[e.target.id]: e.target.value,
										}))
									}
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
									id="password"
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											[e.target.id]: e.target.value,
										}))
									}
								/>
								{error && 'Login ou Senha errado'}
							</div>
							<div className="mb-3 d-flex w-100 justify-content-between align-items-center">
								<button type="submit" className="btn btn-primary">
									Entrar
								</button>
								<NavLink
									className="nav-link active fs-6 text-decoration-underline"
									to="/sign-in"
								>
									Cadastrar
								</NavLink>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
