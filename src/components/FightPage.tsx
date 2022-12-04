import React, { ReactElement } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

interface FightPageProps {}

const FightPage: React.FC<FightPageProps> = ({}) => {
	const { fight } = useParams();

	return <>fight page{fight}</>;
};

export default FightPage;
