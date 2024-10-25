import { render, screen } from "@testing-library/react";
import AccessControl, { checkAccess } from "./AccessControl";
import { expect } from "@jest/globals";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Unauthorized from "../../pages/Unauthorized";

describe("checkAccess function works properly", () => {
	it("should allow access if requiredRoles is not provided", () => {
		// arrange
		const hasAccess = checkAccess("user");
		// assert
		expect(hasAccess).toBe(true);
	});

	it("should allow access if role is in requiredRoles", () => {
		const role = "admin";
		const requiredRoles = ["admin", "super-admin"];
		const hasAccess = checkAccess(role, requiredRoles);
		expect(hasAccess).toBe(true);
	});

	it("should not allow access if role is not provided, but requiredRoles is provided", () => {
		const role = undefined;
		const requiredRoles = ["admin", "super-admin"];
		const hasAccess = checkAccess(role, requiredRoles);
		expect(hasAccess).toBe(false);
	});

	it("should not allow access if role is no in requireRoles", () => {
		const role = "user";
		const requiredRoles = ["admin", "super-admin"];
		const hasAccess = checkAccess(role, requiredRoles);
		expect(hasAccess).toBe(false);
	});

	it("should allow access if no arguments are passed into checkAccess", () => {
		const hasAccess = checkAccess();
		expect(hasAccess).toBe(true);
	});
});

describe("AccessControl component", () => {
	it("should render when user has access and children is not a page", () => {
		// arrange
		render(
			<AccessControl role="user" requiredRoles={["user", "admin"]} isPage={false}>
				<h1>Hello World</h1>
			</AccessControl>
		);
		// act (optional depending on test case)
		// assert
		const h1Element = screen.getByRole("heading");
		expect(h1Element).toBeInTheDocument();
		expect(h1Element).toHaveTextContent("Hello World");
	});

	it("should render when user has access and childre is a page", () => {
		render(
			<AccessControl role="super-admin" requiredRoles={["admin", "super-admin"]} isPage={true}>
				<div>Mock Page</div>
			</AccessControl>
		);

		const mockPage = screen.queryByText("Mock Page");
		expect(mockPage).toBeInTheDocument();
	});

	it("should navigate to unauthorized page when user does not have access and children is a page", () => {
		const testPage = (
			<AccessControl role="user" requiredRoles={["admin", "super-admin"]} isPage={true}>
				<div>Mock Page</div>
			</AccessControl>
		);

		// arrange
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Routes>
					<Route path="/" element={testPage} />
					<Route path="unauthorized" element={<Unauthorized />} />
				</Routes>
			</MemoryRouter>
		);

		// assert
		const mockPage = screen.queryByText("Mock Page");
		expect(mockPage).not.toBeInTheDocument();

		// assert unauthorized page shows up instead
		const unauthorizedPage = screen.queryByTestId("unauthorized-page");
		expect(unauthorizedPage).toBeInTheDocument();
	});

	it("should render null if user does not have access and children is not a page", () => {
		// arrange
		render(
			<AccessControl role="user" requiredRoles={["admin", "super-admin"]} isPage={false}>
				<button>Submit</button>
			</AccessControl>
		);
		// act
		// assert
		const buttonElement = screen.queryByText("Submit");
		expect(buttonElement).not.toBeInTheDocument();
	});
});
