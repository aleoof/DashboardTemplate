import { useState } from 'react';
import { api } from '../../../api';

export default function UserForm() {
	const [formData, setFormData] = useState<{ [key: string]: any }>({});
	const [passwordError, setPasswordError] = useState(false);

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
			await api.post('/user', { access_level, email, login, password, name });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<form onSubmit={handleUser}>
				<h4>Usuário</h4>
				<hr />
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Nome
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
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
						onChange={(e) =>
							setFormData((prev) => ({
								...prev,
								[e.target.id]: e.target.value,
							}))
						}
					/>
				</div>
				<div className="mb-3">
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
				<div className="mb-3">
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
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="text"
						className="form-control"
						id="email"
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
						<option value="0">Admin</option>
						<option value="1">Secretária</option>
						<option value="2">Funcionário</option>
						<option value="3">Externo</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Salvar
				</button>
			</form>
		</div>
	);
}
