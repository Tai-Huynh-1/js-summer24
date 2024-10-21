import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
	const contextValue = useContext(AuthContext);

	if (!contextValue) throw Error("Context cannot be accessed outside of the provider.");

	return contextValue;
};

export default useAuth;
