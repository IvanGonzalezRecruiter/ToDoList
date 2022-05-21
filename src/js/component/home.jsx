import React, { useState } from "react";

export function Home() {
	const [list, setList] = useState([
		{ label: "Pasear al perro", isDone: false },
		{ label: "Montársela a Martin Coimbra", isDone: false },
		{ label: "No dar papaya con los parceros", isDone: false },
		{ label: "Bailar vallenato con Karen", isDone: false },
		{ label: "Pasear en Abbey Road con Ángela", isDone: false },
		{ label: "Hacer las tareas de 4Geeks", isDone: false },
	]);

	const [todo, setTodo] = useState("");

	const addTodo = (e) => {
		if (e.key === "Enter" && todo !== "") {
			setList(
				list.concat({
					label: todo,
					isDone: false,
				})
			);

			setTodo("");
		}
	};

	const removeTodo = (index) => {
		setList(list.filter((item, i) => index != i));
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center h-100">
			<h1>Por hacer</h1>
			{}
			<form onSubmit={(e) => e.preventDefault()}>
				<ul className="list-unstyled d-flex flex-column p-0">
					<li>
						<input
							type="text"
							placeholder="¿Qué mierdas hay qué hacer?"
							className="form-control"
							value={todo}
							onChange={(e) => setTodo(e.target.value)}
							onKeyPress={(e) => addTodo(e)}
						/>
					</li>
					{list.map((item, index) => {
						return (
							<li key={index} className="d-flex listItem">
								{item.label}
								<span
									className="ml-auto"
									role="button"
									tabIndex="0"
									onClick={() => removeTodo(index)}>
									/>
								</span>
							</li>
						);
					})}
					<li className="mt-3 d-inline-flex align-items-center">
						<span id="number">{list.length}</span>
						&nbsp;item
						{list.length > 1 || list.length === 0 ? "s" : null}{" "}
						agregados
						<span className="ml-auto">
							<a
								href="#"
								className="btn btn-small btn-outline-info"
								onClick={() => setList([])}>
								Borrar Lista
							</a>
						</span>
					</li>
				</ul>
			</form>
		</div>
	);
}

export default Home;
