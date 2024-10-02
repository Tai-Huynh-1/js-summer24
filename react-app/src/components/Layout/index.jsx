import React from "react";

const Layout = ({ children }) => {
	const user = { id: 1 };
	return (
		<div>
			{user?.id > 0 ? <PrivateNavbar /> : <Navbar />}
			{children}
		</div>
	);
};

export default Layout;
