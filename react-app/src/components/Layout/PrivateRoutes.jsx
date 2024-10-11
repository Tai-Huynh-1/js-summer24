import React from "react";
import Layout from ".";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = () => {
	const location = useLocation();
	const { user } = useAuth();

	console.log("user in private routes", user);

	const isAuthenticated = user && user.id > 0 && user.accessToken;

	return isAuthenticated ? (
		<Layout>
			<Outlet />
		</Layout>
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default PrivateRoutes;

// identification docs / legal docs / personal info
// save your info / fingerprint in DB
// issue ID card why?
// how long is ID card good for? why does it expire?
// what makes and ID card credible? TRUSTED AUTHORITY that issued the card (seal/signature/stamp/chips)
// ID card makes some CLAIM: unique id information and personal info
//
// REGISTRATION: personal info, user/email (unique), password (https encrypted during transmission) -> arrives @ server
// store your information including password ENCRYPTED IN THEIR DB
// Enigma (messenger) -> dsfsdjfhskdfnsdfsdfsfdsdjghjghjrty -> received (message)

// LOGIN process: send email & password (encrypted during transmission) -> arrives at server (decrypted)
// password123 -> encrypted/hashed -> qwertyuiop (DB)
// password -> hash -> asdfghjkl
// correct: password123 -> hashed -> qwertyuiop === qwertyuiop (DB)
// server issues back to client -> JWT (json web token)
