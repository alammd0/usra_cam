/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./page/Home";
import { useState } from "react";

function App() {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
