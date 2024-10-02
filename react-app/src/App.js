import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Routes>
			{/* Public Routes */}
			<Route path="/" element={<PublicRoutes />}>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="unauthorized" element={<Authorized />} />
			</Route>

			{/* Private Routes */}
			{/* <Route></Route> */}
		</Routes>
	);
}

export default App;
