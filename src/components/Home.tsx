import React, { ReactElement } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import FightList from "./FightList";

const Home: React.FC = () => {
	return (
		<div>
			<div> im home</div>
			<Outlet />
		</div>
	);
};

export default Home;
