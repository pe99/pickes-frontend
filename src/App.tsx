import React from "react";
import "./App.css";
import { Link, Route, RouteObject, Routes } from "react-router-dom";
import FightList from "./components/FightList";
import Home from "./components/Home";
import FightPage from "./components/FightPage";

const App = () => {
	const upcoming = [
		{ name: "UFC 290", path: "ufc290" },
		{ name: "UFC 291", path: "ufc291" },
	];
	let routes: RouteObject[] = [
		{
			path: "/",
			element: <Home />,
			children: [
				{
					path: "events",
					element: <FightList upcoming={upcoming} />,
					children: [{ index: true, path: ":fight", element: <FightPage /> }],
				},
				// { path: "*", element: <NoMatch /> },
			],
		},
	];

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Link to="/events">events</Link>} />
				</Route>
				<Route path="events" element={<FightList upcoming={upcoming} />}>
					<Route index element={<div>fight list page here</div>} />
					<Route path=":fight" element={<FightPage />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
