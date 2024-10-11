import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormError from "../../../../components/FormError";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { Link } from "react-router-dom";

const phoneRegex = /^[(]{1}[0-9]{3}[)]{1}\s[0-9]{3}-[0-9]{4}$/;

function formatPhoneNumber(value) {
	if (!value) return value;
	// clean input for any non-digit value
	const phoneNumber = value.replace(/[^\d]/g, "");
	const phoneNumberLength = phoneNumber.length;
	if (phoneNumberLength < 4) return phoneNumber;
	if (phoneNumberLength < 7) {
		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
	}
	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

const schema = yup.object({
	email: yup
		.string()
		.max(50, "Max character is 50.")
		.email()
		.test({
			name: "Email min length",
			test: (email) => email.length > 10,
			message: "Email must be longer than 10 characters.",
		})
		.required("Email is required."),
	password: yup.string().min(8, "Must be at least 8 characters.").required(),
	phone: yup.string().matches(phoneRegex, "Phone must be in the format (XXX) XXX-XXXX").required(),
	terms: yup.boolean().required().oneOf([true], "Please accept the Terms and Conditions."),
});

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		trigger,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
			password: "",
			phone: "",
			terms: false,
		},
	});

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

	const handlePhoneChange = (e) => {
		const phoneNumber = e.target.value;
		setValue("phone", formatPhoneNumber(phoneNumber));
		trigger("phone", { shouldFocus: true });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label id="email">Email: </label>
				<Input id="email" type="email" {...register("email")} />
				{errors?.email && <FormError>{errors.email.message}</FormError>}
			</div>

			{/* password field */}
			<div>
				<label id="password">Password: </label>
				<Input id="password" type="password" {...register("password")} />
				{errors?.password && <FormError>{errors.password.message}</FormError>}
			</div>

			{/* phone field */}
			<div>
				<label id="phone">Phone: </label>
				<Input id="phone" type="text" {...register("phone")} onChange={handlePhoneChange} />
				{errors?.phone && <FormError>{errors.phone.message}</FormError>}
			</div>

			{/* terms field */}
			<div>
				<label id="terms">
					<Input id="terms" type="checkbox" {...register("terms")} />I agree to the{" "}
					<Link to="/" target="_blank">
						Terms & Conditions
					</Link>
					.
				</label>
				{errors?.terms && <p className="text-red-500">{errors.terms?.message}</p>}
			</div>

			<Button type="submit" color="primary" disabled={!watch("terms")}>
				Submit
			</Button>
		</form>
	);
};

export default RegisterForm;
