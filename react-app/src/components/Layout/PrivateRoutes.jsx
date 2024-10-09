import React from "react";
import Layout from ".";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
	const location = useLocation();

	const user = null;
	const userIsValid = user && user.id > 0;
	return userIsValid ? (
		<Layout>
			<Outlet />
		</Layout>
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default PrivateRoutes;
