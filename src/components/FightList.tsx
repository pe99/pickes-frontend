import React, { ReactElement } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

type Event = {
	name: string;
	path: String;
};

interface FightListProps {
	upcoming: Event[];
}

const FightList: React.FC<FightListProps> = ({ upcoming }) => {
	const fights: ReactElement[] = [];
	upcoming.forEach((fight) => {
		fights.push(
			<Link to={`/events/${fight.path}`}>
				<div>{fight.name}</div>
			</Link>
		);
	});

	return (
		<>
			{fights}
			<Outlet />
		</>
	);
};

export default FightList;
