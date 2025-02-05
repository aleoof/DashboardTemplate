// import { NavLink, useNavigate } from 'react-router';
import './styles.css';
import { api } from '../../api';
import { useState } from 'react';

function Login() {
	// const navigate = useNavigate();
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
			// navigate('/');
			setError(false);
		} catch (error) {
			setError(true);
			console.error(error);
		}
	};

	return (
		<div className="login row align-items-center justify-content-center p-0 m-0">
			<h2 className="logo"><b>HUB</b>OS</h2>
			<div className="col-md-3 col-sm-6 p-0 h-30  overflow-hidden">
				<div className=" p-0 h-30 card overflow-hidden p-5">
					<h2 className="text-center p-2"><b>Login</b></h2>
					<p className="m-0 mb-5 text-center">Bem vindo de volta.</p>

					<div className="h-100 w-100 d-flex">
						<form className="w-100" onSubmit={handleLogin}>

							<div className="mb-3">
								<input
									type="text"
									className="form-control"
									id="login"
									placeholder="Seu usuário"
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											[e.target.id]: e.target.value,
										}))
									}
								/>
							</div>
							<div className="mb-3">

								<input
									type="password"
									className="form-control"
									id="password"
									placeholder="Sua senha"
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
								<button type="submit" className="btn w-100">
									Entrar
								</button>
							</div>
						</form>
					</div>
				</div>
				<p className='text-end p-2 company'>Desenvolvido por <strong>Shartech</strong></p>
			</div>
		</div>
	);
}

export default Login;
