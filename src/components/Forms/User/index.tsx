export default function UserForm() {
	return (
		<div>
			<form>
				<h4>Kit</h4>
				<hr />
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Nome
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Login
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Senha
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Tipo de usuário
					</label>
					<select className="form-select" aria-label="Default select example">
						<option selected disabled>
							Acessos
						</option>
						<option value="0">Admin</option>
						<option value="1">Secretária</option>
						<option value="2">Funcionário</option>
						<option value="2">Externo</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Salvar
				</button>
			</form>
		</div>
	);
}
