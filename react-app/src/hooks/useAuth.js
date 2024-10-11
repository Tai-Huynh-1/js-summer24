import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) throw Error("Context cannot be accessed outside of the provider.");

	return context;
};

export default useAuth;
