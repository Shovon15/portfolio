import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";

const DashboardLayout = () => {
	return (
		<div>
			<p>dashobard Nav</p>
			<Outlet />
			<Footer />
		</div>
	);
};

export default DashboardLayout;
