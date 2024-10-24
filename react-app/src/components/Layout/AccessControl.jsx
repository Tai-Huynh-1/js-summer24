import React from "react";
import { Navigate } from "react-router-dom";

// role: "student", "teacher", "admin", "super-admin"
// requiredRoles: ["admin", "super-admin"]

export function checkAccess(role, requiredRoles) {
	if (!requiredRoles) return true; // boolean
	if (!role) return false; // boolean
	return requiredRoles.includes(role); // boolean
}

// props = {role, requireRoles, isPage, children}
const AccessControl = (props) => {
	const { role, requiredRoles, isPage, children } = props;

	const hasAccess = checkAccess(role, requiredRoles);

	if (!hasAccess && isPage) return <Navigate to={"/unauthorized"} replace />; // page component
	if (!hasAccess) return null; // regular component
	return children;
};

export default AccessControl;

// ["/dashboard", "/unauthorized" ]
