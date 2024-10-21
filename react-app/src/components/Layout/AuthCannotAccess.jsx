import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AuthCannotAccess = (props) => {
	const { children } = props;
	const { user } = useAuth();
	const isAuthenticated = user || user?.id > 0 || user?.accessToken;

	if (isAuthenticated) return <Navigate to="/dashboard" replace />;
	return children;
};

export default AuthCannotAccess;

{
	/* <AuthCannotAccess page={<Login />} />; */
}
