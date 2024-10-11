import React from "react";
import Navbar from "./Navbar";
import useAuth from "../../hooks/useAuth";
import PrivateNavbar from "./PrivateNavbar";

const Layout = ({ children }) => {
	const { user } = useAuth();

	const isAuthenticated = user && user.id > 0 && user.accessToken;
	return (
		<div>
			{isAuthenticated ? <PrivateNavbar /> : <Navbar />}
			{children}
		</div>
	);
};

export default Layout;
