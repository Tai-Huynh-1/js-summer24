import { useEffect, useState } from "react";

/**
 *
 * @param {*} value
 * @param {*} delay in milliseconds
 */
export default function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timerId);
		};
	}, [value, delay]);

	return debouncedValue;
}
