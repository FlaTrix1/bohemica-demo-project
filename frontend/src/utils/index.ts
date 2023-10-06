export const debounce = (
	fn: Function,
	timeoutID: ReturnType<typeof setTimeout>,
	delay: number
) => {
	return (...args: any[]) => {
		clearTimeout(timeoutID)
		timeoutID = setTimeout(() => {
			fn(...args)
		}, delay)
	}
}
