export default function OrdersForm() {
	return (
		<div>
			<form>
				<h4>Ordem de serviço</h4>
				<hr />
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Endereço
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Bairro
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						UF
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Município
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Materiais
					</label>
					<select className="form-select" aria-label="Default select example">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary">
					Salvar
				</button>
			</form>
		</div>
	);
}
