import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormError from "../../../../components/FormError";

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
	email: yup.string().max(50, "Max character is 50.").email().required(),
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

	const handlePhoneChange = (e) => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label id="email">Email: </label>
				<input id="email" type="email" {...register("email")} />
				{errors?.email && <FormError>{errors.email.message}</FormError>}
			</div>

			{/* password field */}
			<div></div>

			{/* phone field */}
			<div>
				<label id="phone">Phone: </label>
				<input id="phone" type="text" {...register("phone")} onChange={handlePhoneChange} />
				{errors?.phone && <FormError>{errors.phone.message}</FormError>}
			</div>

			{/* terms field */}
			<div></div>
		</form>
	);
};

export default RegisterForm;
