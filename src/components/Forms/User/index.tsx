import { useEffect, useState } from 'react';
import { api } from '../../../api';
import { useSearchParams } from 'react-router';

export default function UserForm() {
	const [formData, setFormData] = useState<{ [key: string]: any }>({});
	const [passwordError, setPasswordError] = useState(false);
	const [searchParams] = useSearchParams();
	const id = searchParams.get('id');

	const handleUser = async (e: any) => {
		setPasswordError(false);
		e.preventDefault();
		const { access_level, confirmPassword, email, login, name, password } =
			formData;
		if (confirmPassword !== password) {
			setPasswordError(true);
			return;
		}
		try {
			if (id) {
				await api.put(`/user/${id}`, {
					access_level,
					email,
					login,
					password,
					name,
				});
			} else {
				await api.post('/user', { access_level, email, login, password, name });
			}
		} catch (error) {
			console.error(error);
		}
	};

	const getUser = async () => {
		const response = await api.get(`/user/${id}`);

		setFormData(response.data);
	};

	useEffect(() => {
		if (id) {
			getUser();
		}
	}, []);

	return (
		<div className="card list-height overflow-y-auto p-3 pb-3 mb-5">
			<div className="card-body row">
				<form onSubmit={handleUser}>
					<div className="mb-3 col-md-6">
						<label htmlFor="name" className="form-label">
							Nome
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={formData.name}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									[e.target.id]: e.target.value,
								}))
							}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="login" className="form-label">
							Login
						</label>
						<input
							type="text"
							className="form-control"
							id="login"
							value={formData.login}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									[e.target.id]: e.target.value,
								}))
							}
						/>
					</div>
					{!id && (
						<>
							<div className="mb-3 col-md-2">
								<label htmlFor="password" className="form-label">
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
							</div>
							<div className="mb-3 col-md-2">

									<label htmlFor="password" className="form-label">
										Confirmar Senha
									</label>
									<input
										type="password"
										className="form-control"
										id="confirmPassword"
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												[e.target.id]: e.target.value,
											}))
										}
									/>
									{passwordError && 'As senhas são diferentes'}
								</div>
						</>
					)}
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="text"
							className="form-control"
							id="email"
							value={formData.email}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									[e.target.id]: e.target.value,
								}))
							}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="access_level" className="form-label">
							Tipo de usuário
						</label>
						<select
							className="form-select"
							aria-label="Default select example"
							id="access_level"
							value={formData.access_level}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									[e.target.id]: e.target.value,
								}))
							}
						>
							<option selected disabled>
								Acessos
							</option>
							<option value="0">Administrador</option>
							<option value="1">Administrativo</option>
							<option value="2">Funcionário</option>
							<option value="3">Externo</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">
						Salvar
					</button>
				</form>
			</div>
		</div>
	);
}
