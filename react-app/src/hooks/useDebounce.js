import { useEffect, useState } from "react";

/**
 *
 * @param {*} value - the state we want to maintain
 * @param {*} delay - in milliseconds
 */
export default function useDebounce(value, delay) {
	// value: "ba" -> "bal" -> "ball"
	const [debouncedValue, setDebouncedValue] = useState(value); // "b" -> "ball"

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedValue(value); // queue: "b" -> "ba" -> "bal" -> "ball"
		}, delay);

		return () => {
			clearTimeout(timerId);
		};
	}, [value, delay]);

	return debouncedValue;
}
