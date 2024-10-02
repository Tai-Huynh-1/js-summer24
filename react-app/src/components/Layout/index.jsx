import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	const user = null;
	return (
		<div>
			{user ? <div>Private</div> : <Navbar />}
			{children}
		</div>
	);
};

export default Layout;
