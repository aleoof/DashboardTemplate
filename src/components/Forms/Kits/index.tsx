import {ChangeEvent, useEffect, useState} from 'react';
import {api} from '../../../api';
import {BsFillTrashFill} from 'react-icons/bs';
// import ListItem from "../../ListItem/Kits";

export default function KitsForm() {
	const [materials, setMaterials] = useState<
		Array<{ id: number; description: string }>
	>([]);

	const [listOfMaterials, setListOfMaterials] = useState<
		Array<{ id: number; description: string }>
	>([]);
	const [selectedMaterial, setSelectedMaterial] = useState('');
	const [materialAndQuantity, setMaterialAndQuantity] = useState<
		Array<{ material_id: number; quantity: string }>
	>([]);

	const getMaterials = async () => {
		const response = await api.get('materials');
		setMaterials(response.data);
	};

	useEffect(() => {
		getMaterials();
	}, []);

	function handleMaterialList() {
		const filteredMaterial = materials.filter(
			(material) => material.id === parseInt(selectedMaterial)
		);
		if (
			selectedMaterial &&
			materials.every((material) => material.id !== parseInt(selectedMaterial))
		) {
			console.log('clicked');
			setListOfMaterials((prev) => [...prev, filteredMaterial[0]]);
			setSelectedMaterial('');
		}
	}

	const handleMaterialQuantity = (
		e: ChangeEvent<HTMLInputElement>,
		id: string
	) => {
		const value: string = e.target.value;
		if (
			!materialAndQuantity.some((item) => item.material_id === parseInt(id))
		) {
			setMaterialAndQuantity((prev) => [
				...prev,
				{ material_id: parseInt(id), quantity: value },
			]);
		} else {
			setMaterialAndQuantity((prev) =>
				prev.map((p) => {
					if (p.material_id === parseInt(id)) {
						return { ...p, quantity: value };
					} else return p;
				})
			);
		}
	};

	return (
		<div className="row">
			<div className="col-md-3">
				<div className="card list-height overflow-y-auto pb-0 mb-5">
					<div className="card-header">
						<p className="card-title">Kits</p>
					</div>
					<div className="card-body p-3">

					</div>
				</div>
			</div>
			<div className="col-md-9">
				<div className="card list-height overflow-y-auto pb-0 mb-5">
					<div className="card-header">
						<p className="card-title">Editar</p>
						<button type="submit" className="btn btn-primary">
							Salvar
						</button>
					</div>
					<hr/>
					<div className="card-body p-3">
						<form>
							<div className="row">
								<div className="mb-3 col-9">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Descrição
									</label>
									<input
										value= ''
										type="text"
										className="form-control"
										id="description"
									/>
								</div>
								<div className="mb-3 col-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Status
									</label>
									<input
										value= ''
										type="text"
										className="form-control"
										id="description"
									/>
								</div>
							</div>
							<div className="mb-3 d-flex justify-content-between align-items-end gap-5">
								<span className="flex-fill">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Materiais
									</label>
									<select
										className="form-select"
										aria-label="Default select example"
										onChange={(e) => setSelectedMaterial(e.target.value)}
									>
										<option selected disabled value={''}>
											Selecione o Material
										</option>
										{materials.map((material) => (
											<option value={material.id}>{material.description}</option>
										))}
									</select>
								</span>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => {
										handleMaterialList();
									}}
								>
									+
								</button>
							</div>
							<table className="w-100">
								<thead>
								<tr>
									<th className="text-start">Kit</th>
									<th>Status</th>
									<th>Ações</th>
								</tr>
								</thead>
								<tbody>
								{listOfMaterials.length > 0 && (
									<>
										{listOfMaterials.map((material) => (
											<div className="mb-3 mt-3">
												<div className="d-flex justify-content-between align-items-end">
													<div>{material.description}</div>
													<div className="d-flex align-items-end gap-5">
										<span>
											<label
												htmlFor="exampleInputEmail1"
												className="form-label"
											>
												Quantidade
											</label>
											<input
												value={
													materialAndQuantity.some(
														(mq) => mq.material_id === material.id
													)
														? materialAndQuantity.filter(
															(m) => m.material_id === material.id
														)[0].quantity
														: ''
												}
												type="text"
												className="form-control"
												onChange={(e) =>
													handleMaterialQuantity(e, `${material.id}`)
												}
											/>
										</span>
														<button className="btn btn-primary" onClick={() => {}}>
															<BsFillTrashFill />
														</button>
													</div>
												</div>
											</div>
										))}
									</>
								)}
								</tbody>
							</table>

						</form>
					</div>
				</div>
			</div>
		</div>

	);
}
