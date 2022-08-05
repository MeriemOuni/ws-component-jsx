import React from "react";
import "./App.css";
import Cards from "./Components/Cards";
import Carrrousel from "./Components/Carrrousel";
import Formss from "./Components/Formss";
import NavBar from "./Components/NavBar";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<h1 style={{ color: "red" }}>Workshop React Component & JSX</h1>
			<Carrrousel />
			<Cards />
			<Formss />
		</div>
	);
}

export default App;
