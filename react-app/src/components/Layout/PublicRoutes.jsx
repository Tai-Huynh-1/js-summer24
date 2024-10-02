import React from "react";
import Layout from ".";
import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};

export default PublicRoutes;
